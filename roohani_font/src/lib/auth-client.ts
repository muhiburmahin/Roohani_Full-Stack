// src/lib/auth-client.ts
import { createAuthClient } from "better-auth/react";
import { env } from "@/src/env";

export const authClient = createAuthClient({
    baseURL: env.BETTER_AUTH_URL,
    user: {
        additionalFields: {
            username: { type: "string", required: true },
            phone: { type: "string", required: true }
        }
    }
});