import { getMyProfileAction } from "@/src/actions/user.action";
import AdminProfile from "@/src/components/modules/admin/AdminProfile";

export const dynamic = 'force-dynamic';

export default async function MyProfilePage() {
    try {
        const result = await getMyProfileAction();

        if (!result?.data) {
            return (
                <div className="flex items-center justify-center h-screen">
                    <div className="bg-rose-50 border-2 border-rose-200 rounded-lg p-8 max-w-md text-center">
                        <h2 className="text-2xl font-bold text-rose-900 mb-2">Profile Error</h2>
                        <p className="text-rose-700">{result?.error || "Failed to load profile"}</p>
                    </div>
                </div>
            );
        }

        return <AdminProfile user={result.data} />;
    } catch (error) {
        console.error("Profile Page Error:", error);
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="bg-rose-50 border-2 border-rose-200 rounded-lg p-8 max-w-md text-center">
                    <h2 className="text-2xl font-bold text-rose-900 mb-2">Profile Error</h2>
                    <p className="text-rose-700">An unexpected error occurred. Please try again.</p>
                </div>
            </div>
        );
    }
}