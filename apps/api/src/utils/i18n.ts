export const i18n = {
	success: {
		auth: {
			post: {
				login: "User has been logged in successfully",
				register: "User has been registered successfully",
				device: "Successfully registered device",
			},
		},
	},
	error: {
		auth: {
			post: {
				login: "Failed to login user",
				register: "Failed to register user",
				duplicate: "User already exists",
				device: "Failed to register device",
			},
		},
	},
} as const;
