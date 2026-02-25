// src/lib/auth-client.ts
import { createAuthClient } from "better-auth/react";
import { env } from "@/src/env";

export const authClient = createAuthClient({
    baseURL: env.NEXT_PUBLIC_BETTER_AUTH_URL,
    credentials: "include",
    user: {
        additionalFields: {
            username: { type: "string", required: true },
            phone: { type: "string", required: true }
        }
    }
});