type IOptions = {
    page?: number;
    limit?: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
};
type IOptionsResult = {
    page: number;
    limit: number;
    skip: number;
    sortBy: string;
    sortOrder: 'asc' | 'desc';
};
export declare const paginationHelper: {
    calculatePagination: (options: IOptions) => IOptionsResult;
};
export {};
//# sourceMappingURL=paginationHelper.d.ts.map