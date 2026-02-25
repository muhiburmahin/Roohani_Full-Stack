export declare const auth: import("better-auth").Auth<{
    database: (options: import("better-auth").BetterAuthOptions) => import("better-auth").DBAdapter<import("better-auth").BetterAuthOptions>;
    plugins: [];
    baseURL: string;
    emailAndPassword: {
        enabled: true;
        autoSignIn: true;
        requireEmailVerification: false;
    };
    beforeSessionCreate: ({ session, user }: {
        session: any;
        user: any;
    }) => Promise<{
        session: any;
        user: any;
    }>;
    trustedOrigins: string[];
    user: {
        additionalFields: {
            role: {
                type: "string";
                defaultValue: string;
                required: false;
                input: false;
            };
            phone: {
                type: "string";
                required: true;
            };
            username: {
                type: "string";
                required: true;
            };
        };
    };
}>;
//# sourceMappingURL=auth.d.ts.map