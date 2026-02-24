import ProductDetails from "@/src/components/modules/shared/ProductDetails";
import { notFound } from "next/navigation";
import { getSingleProductAction } from '@/src/actions/product.action';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const response = await getSingleProductAction(id);

    if (!response.success || !response.data) {
        return notFound();
    }

    const product = response.data;

    return (
        <div className="min-h-screen bg-white dark:bg-[#0a0a0a] py-12">
            <div className="container mx-auto px-6 md:px-12">
                <ProductDetails product={product} />
            </div>
        </div>
    );
}