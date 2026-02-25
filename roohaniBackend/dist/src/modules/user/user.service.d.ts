import { OrderStatus, Role } from "../../../generated/prisma/enums";
export declare const userService: {
    getMyProfile: (userId: string) => Promise<{
        id: string;
        name: string;
        createdAt: Date;
        email: string;
        phone: string;
        image: string | null;
        role: Role;
    }>;
    getAllUsers: () => Promise<{
        id: string;
        name: string;
        createdAt: Date;
        phone: string;
        role: Role;
    }[]>;
    adminStats: () => Promise<{
        user: {
            total: number;
            admin: number;
            customer: number;
        };
        category: {
            total: number;
        };
        product: {
            total: number;
        };
        order: {
            totalOrders: number;
            totalRevenue: number;
            successOrdersCount: number;
            pending: number;
            confirmed: number;
            shipped: number;
            delivered: number;
            cancelled: number;
            pendingAmount: number;
            confirmedAmount: number;
            shippedAmount: number;
            deliveredAmount: number;
            cancelledAmount: number;
        };
    }>;
    customerStats: (userId: string) => Promise<{
        totalOrders: number;
        totalSpent: number;
        orderCountByStatus: {
            [k: string]: number;
        };
        orderAmountByStatus: {
            [k: string]: number;
        };
        recentOrders: ({
            _count: {
                items: number;
            };
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
        })[];
    }>;
    updateProfile: (id: string, payload: Partial<{
        name: string;
        phone: string;
        image: string;
    }>) => Promise<{
        id: string;
        name: string;
        email: string;
        phone: string;
        image: string | null;
        role: Role;
    }>;
};
//# sourceMappingURL=user.service.d.ts.map