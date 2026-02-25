import { z } from "zod";
export declare const OrderValidation: {
    createOrderSchema: z.ZodObject<{
        body: z.ZodObject<{
            shippingAddress: z.ZodString;
            phone: z.ZodString;
            items: z.ZodArray<z.ZodObject<{
                productId: z.ZodString;
                quantity: z.ZodNumber;
                size: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>;
    }, z.core.$strip>;
};
//# sourceMappingURL=order.validation.d.ts.map