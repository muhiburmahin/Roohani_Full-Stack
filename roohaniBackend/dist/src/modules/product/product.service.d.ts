export declare const deleteProductById: (id: string) => Promise<{
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
}>;
export declare const productService: {
    createProduct: (payload: any, adminId: string) => Promise<{
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
    }>;
    getAllProducts: (query: any) => Promise<{
        meta: {
            page: number;
            limit: number;
            totalCount: number;
            totalPages: number;
        };
        data: ({
            category: {
                name: string;
            };
        } & {
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
        })[];
    }>;
    getProductById: (id: string) => Promise<{
        category: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
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
    }>;
    updateProductById: (id: string, payload: Partial<any>) => Promise<{
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
    }>;
    deleteProductById: (id: string) => Promise<{
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
    }>;
};
//# sourceMappingURL=product.service.d.ts.map