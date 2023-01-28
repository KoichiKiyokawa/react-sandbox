declare module NodeJS {
	interface ProcessEnv {
		DATABASE_URL: string;
		PORT?: number;
	}
}
