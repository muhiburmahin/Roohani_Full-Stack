import { Request, Response, NextFunction } from "express";
export declare const userController: {
    getMyProfile: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getAllUsers: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    adminStats: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    customerStats: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateProfile: (req: Request, res: Response, next: NextFunction) => Promise<void>;
};
//# sourceMappingURL=user.controller.d.ts.map