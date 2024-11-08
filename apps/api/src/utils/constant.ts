export const USER_ROLE_ENUM = {
	ADMIN: "admin",
	USER: "user",
} as const;

export type USER_ROLE_ENUM =
	(typeof USER_ROLE_ENUM)[keyof typeof USER_ROLE_ENUM];

export const GENDER_ENUM = {
	MALE: "male",
	FEMALE: "female",
} as const;

export type GENDER_ENUM = (typeof GENDER_ENUM)[keyof typeof GENDER_ENUM];

export const SSO_PROVIDER_ENUM = {
	GOOGLE: "google",
	FACEBOOK: "facebook",
} as const;

export type SSO_PROVIDER_ENUM =
	(typeof SSO_PROVIDER_ENUM)[keyof typeof SSO_PROVIDER_ENUM];
