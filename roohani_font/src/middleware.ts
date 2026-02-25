import { NextRequest, NextResponse } from "next/server";
import { userService } from "@/src/services/user.service";
import { Roles } from "@/src/constants/role";

export async function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    // Only handle dashboard routes
    if (!pathname.startsWith("/dashboard") && !pathname.startsWith("/admin-dashboard")) {
        return NextResponse.next();
    }

    try {
        const { data } = await userService.getSession();
        const session = data;

        if (!session || !session.user) {
            return NextResponse.redirect(new URL("/login", request.url));
        }

        const userRole = session.user.role?.toUpperCase();

        if (userRole === Roles.admin) {
            if (pathname === "/dashboard") {
                return NextResponse.redirect(new URL("/admin-dashboard", request.url));
            }
        }

        if (userRole === Roles.customer) {
            if (pathname.startsWith("/admin-dashboard")) {
                return NextResponse.redirect(new URL("/", request.url));
            }
        }

        return NextResponse.next();
    } catch (error) {
        console.error("Middleware error:", error);
        return NextResponse.redirect(new URL("/login", request.url));
    }
}

export const config = {
    matcher: [
        "/dashboard/:path*",
        "/admin-dashboard/:path*",
    ],
};
