CREATE TYPE "public"."sso_provider" AS ENUM('google', 'facebook');--> statement-breakpoint
CREATE TYPE "public"."gender" AS ENUM('male', 'female');--> statement-breakpoint
CREATE TYPE "public"."role" AS ENUM('admin', 'user');--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "bank_accounts" (
	"id" varchar PRIMARY KEY NOT NULL,
	"user_id" varchar NOT NULL,
	"bank_name" varchar NOT NULL,
	"account_number" varchar NOT NULL,
	"account_holder" varchar NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "bank_accounts_account_number_unique" UNIQUE("account_number")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "devices" (
	"id" varchar PRIMARY KEY NOT NULL,
	"user_id" varchar,
	"mac_address" varchar NOT NULL,
	"user_agent" varchar NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "devices_mac_address_unique" UNIQUE("mac_address")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "otps" (
	"id" varchar PRIMARY KEY NOT NULL,
	"device_id" varchar NOT NULL,
	"otp" char(6) NOT NULL,
	"expired_at" timestamp NOT NULL,
	"verify_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" varchar PRIMARY KEY NOT NULL,
	"phone_number" varchar NOT NULL,
	"email" varchar NOT NULL,
	"full_name" varchar NOT NULL,
	"password" varchar,
	"salt" varchar(64),
	"birth_date" date NOT NULL,
	"role" "role" DEFAULT 'user' NOT NULL,
	"gender" "gender",
	"google_id" varchar,
	"facebook_id" varchar,
	"sso_provider" "sso_provider",
	"verified_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp,
	"deleted_at" timestamp,
	CONSTRAINT "users_phone_number_unique" UNIQUE("phone_number"),
	CONSTRAINT "users_email_unique" UNIQUE("email"),
	CONSTRAINT "users_google_id_unique" UNIQUE("google_id"),
	CONSTRAINT "users_facebook_id_unique" UNIQUE("facebook_id")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "bank_accounts" ADD CONSTRAINT "bank_accounts_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "devices" ADD CONSTRAINT "devices_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "otps" ADD CONSTRAINT "otps_device_id_devices_id_fk" FOREIGN KEY ("device_id") REFERENCES "public"."devices"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "users_user_id_idx" ON "bank_accounts" USING hash ("user_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "devices_user_id_idx" ON "devices" USING hash ("user_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "devices_mac_address_idx" ON "devices" USING btree ("mac_address");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "devices_user_agent_idx" ON "devices" USING btree ("user_agent");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "otps_device_id_idx" ON "otps" USING hash ("device_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "otps_expired_at_idx" ON "otps" USING btree ("expired_at");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "otps_verify_at_idx" ON "otps" USING btree ("verify_at");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "users_email_idx" ON "users" USING hash ("email");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "users_phone_number_idx" ON "users" USING hash ("phone_number");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "users_role_idx" ON "users" USING hash ("role");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "users_gender_idx" ON "users" USING hash ("gender");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "users_birth_date_idx" ON "users" USING btree ("birth_date");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "users_verified_at_idx" ON "users" USING btree ("verified_at");