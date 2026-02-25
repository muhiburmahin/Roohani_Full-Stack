import { z } from "zod";
export declare const createProductSchema: z.ZodObject<{
    body: z.ZodObject<{
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        variantType: z.ZodString;
        sizes: z.ZodDefault<z.ZodArray<z.ZodString>>;
        variantPrices: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
        stock: z.ZodDefault<z.ZodNumber>;
        images: z.ZodArray<z.ZodString>;
        categoryId: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const ProductValidation: {
    createProductSchema: z.ZodObject<{
        body: z.ZodObject<{
            name: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            variantType: z.ZodString;
            sizes: z.ZodDefault<z.ZodArray<z.ZodString>>;
            variantPrices: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
            stock: z.ZodDefault<z.ZodNumber>;
            images: z.ZodArray<z.ZodString>;
            categoryId: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>;
    updateProductSchema: z.ZodObject<{
        body: z.ZodOptional<z.ZodObject<{
            name: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            variantType: z.ZodString;
            sizes: z.ZodDefault<z.ZodArray<z.ZodString>>;
            variantPrices: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
            stock: z.ZodDefault<z.ZodNumber>;
            images: z.ZodArray<z.ZodString>;
            categoryId: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
};
//# sourceMappingURL=product.validation.d.ts.map