/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { revalidateTag } from "next/cache";
import { categoryService } from "@/src/services/category.service";


export interface ActionResponse<T = any> {
    success: boolean;
    data?: T;
    message?: string; // এখানে message দিন, error নয়
}


export const getAllCategoriesAction = async (): Promise<ActionResponse> => {
    try {
        const res = await categoryService.getAllCategories();
        // আপনার API সার্ভিস যদি সরাসরি ডাটা রিটার্ন করে
        return {
            success: true,
            data: res?.data || res // ডাটা প্রপার্টি চেক করে পাঠানো
        };
    } catch (err: any) {
        return {
            success: false,
            message: err.message || "Failed to fetch categories" // 'error' এর বদলে 'message'
        };
    }
};

export const createCategoryAction = async (name: string): Promise<ActionResponse> => {
    try {
        const result = await categoryService.addCategory(name);
        if (result.success) revalidateTag("categories", "default");
        return result;
    } catch (err: any) {
        return {
            success: false,
            message: err.message || "Failed to create category"
        };
    }
};

export const deleteCategoryAction = async (id: string): Promise<ActionResponse> => {
    try {
        const result = await categoryService.deleteCategory(id);
        if (result.success) {
            revalidateTag("categories", "default");
        }
        return result;
    } catch (err: any) {
        return { success: false, message: err.message || "Failed to delete category" };
    }
};

