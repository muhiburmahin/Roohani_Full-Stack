export declare const deleteCategoryById: (id: string) => Promise<{
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare const categoryService: {
    createCategory: (category: string) => Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getAllCategories: () => Promise<{
        categories: ({
            products: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                description: string | null;
                variantType: string;
                sizes: string[];
                variantPrices: import("@prisma/client/runtime/client").JsonValue | null;
                basePrice: number;
                stock: number;
                images: string[];
                categoryId: string;
                isDeleted: boolean;
            }[];
        } & {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
        })[];
        totalCount: number;
    }>;
    deleteCategoryById: (id: string) => Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
};
//# sourceMappingURL=category.service.d.ts.map