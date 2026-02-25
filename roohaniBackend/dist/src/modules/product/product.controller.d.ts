import { NextFunction, Request, Response } from "express";
export declare const productController: {
    createProduct: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getAllProducts: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getProductById: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateProductById: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteProductById: (req: Request, res: Response, next: NextFunction) => Promise<void>;
};
//# sourceMappingURL=product.controller.d.ts.map