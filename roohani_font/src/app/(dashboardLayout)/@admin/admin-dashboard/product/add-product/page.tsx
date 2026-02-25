
import AddProductForm from "@/src/components/modules/admin/AddProductForm";
import { getAllCategoriesAction } from '@/src/actions/category.action';

export const dynamic = 'force-dynamic';

export default async function Page() {
    try {
        // ১. ডাটা ফেচ করা
        const categoriesRes = await getAllCategoriesAction();

        const categoriesList = categoriesRes?.data?.data || categoriesRes?.data || [];

        return (
            <div className="p-8">
                <h1 className="text-3xl font-black uppercase italic mb-8">
                    Add New Stock
                </h1>
                <AddProductForm categories={categoriesList} />
            </div>
        );
    } catch (error) {
        console.error("Add Product Page Error:", error);
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="bg-rose-50 border-2 border-rose-200 rounded-lg p-8 max-w-md text-center">
                    <h2 className="text-2xl font-bold text-rose-900 mb-2">Page Error</h2>
                    <p className="text-rose-700 mb-4">Failed to load categories. Please try refreshing the page.</p>
                    <button onClick={() => window.location.reload()} className="px-4 py-2 bg-rose-600 text-white rounded hover:bg-rose-700">
                        Refresh
                    </button>
                </div>
            </div>
        );
    }
}