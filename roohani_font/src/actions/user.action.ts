"use server";
import { userService } from "../services/user.service";

export const getAdminDashboardStatsAction = async () => {
    const result = await userService.getAdminStats();

    if (result?.success) {
        return result.data;
    }

    return null;
};


export const getMyProfileAction = async () => {
    try {
        const result = await userService.getMyProfile();
        if (result && result.success) {
            return {
                data: result.data,
                error: null
            };
        }

        return {
            data: null,
            error: result.message || "Failed to fetch profile"
        };
    } catch (error) {
        console.error("Action Error (getMyProfile):", error);
        return {
            data: null,
            error: "An unexpected error occurred while fetching profile"
        };
    }
};

export const getAllUsersAction = async () => {
    try {
        const res = await userService.getAllUsers();
        return res;
    } catch (error: any) {
        return { success: false, message: error.message || "Failed to fetch users" };
    }
};



export const getCustomerStatsAction = async () => {
    try {
        const stats = await userService.getCustomerStats()
        if (!stats || stats.success === false) {
            console.log("No data found or unauthorized");
        }

        return stats;
    } catch (error) {
        console.error("Action Error:", error);
        return { success: false, message: "Customer stats action failed" };
    }
};

