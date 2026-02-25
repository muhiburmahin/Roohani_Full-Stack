import { OrderStatus } from "../../../generated/prisma/enums";
export declare const orderService: {
    createOrder: (customerId: string, payload: any) => Promise<{
        items: ({
            product: {
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
            } | null;
        } & {
            id: string;
            createdAt: Date;
            price: number;
            quantity: number;
            selectedSize: string | null;
            productId: string | null;
            orderId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        phone: string;
        customerId: string;
        status: OrderStatus;
        shippingAddress: string;
        totalAmount: number;
        transactionId: string | null;
    }>;
    getMyOrders: (userId: string, role: string) => Promise<({
        customer: {
            name: string;
            email: string;
        };
        items: ({
            product: {
                name: string;
                basePrice: number;
                images: string[];
            } | null;
        } & {
            id: string;
            createdAt: Date;
            price: number;
            quantity: number;
            selectedSize: string | null;
            productId: string | null;
            orderId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        phone: string;
        customerId: string;
        status: OrderStatus;
        shippingAddress: string;
        totalAmount: number;
        transactionId: string | null;
    })[]>;
    getSingleOrderById: (orderId: string, userId: string, role: string) => Promise<{
        customer: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            username: string;
            phone: string;
            emailVerified: boolean;
            image: string | null;
            role: import("../../../generated/prisma/enums").Role;
        };
        items: ({
            product: {
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
            } | null;
        } & {
            id: string;
            createdAt: Date;
            price: number;
            quantity: number;
            selectedSize: string | null;
            productId: string | null;
            orderId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        phone: string;
        customerId: string;
        status: OrderStatus;
        shippingAddress: string;
        totalAmount: number;
        transactionId: string | null;
    }>;
    updateOrderStatus: (orderId: string, status: OrderStatus) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        phone: string;
        customerId: string;
        status: OrderStatus;
        shippingAddress: string;
        totalAmount: number;
        transactionId: string | null;
    }>;
    deleteOrderById: (id: string) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        phone: string;
        customerId: string;
        status: OrderStatus;
        shippingAddress: string;
        totalAmount: number;
        transactionId: string | null;
    }>;
    cancelOrder: (orderId: string, userId: string) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        phone: string;
        customerId: string;
        status: OrderStatus;
        shippingAddress: string;
        totalAmount: number;
        transactionId: string | null;
    }>;
};
//# sourceMappingURL=order.service.d.ts.map