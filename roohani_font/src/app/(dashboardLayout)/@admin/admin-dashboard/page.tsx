import AdminOverview from "@/src/components/modules/admin/AdminOverview";
import { getAdminDashboardStatsAction } from "@/src/actions/user.action";

export const dynamic = 'force-dynamic';

export default async function AdminDashboardPage() {
    try {
        // ডাটা ফেচ করা হচ্ছে
        const stats = await getAdminDashboardStatsAction();

        console.log("Dashboard Stats:", stats);

        if (!stats) {
            return (
                <div className="flex items-center justify-center min-h-screen p-4">
                    <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-8 max-w-md text-center">
                        <h2 className="text-2xl font-bold text-amber-900 mb-2">No Data Available</h2>
                        <p className="text-amber-700 mb-4">Unable to fetch admin statistics. Please ensure you have admin access.</p>
                        <button onClick={() => window.location.reload()} className="px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700">
                            Refresh
                        </button>
                    </div>
                </div>
            );
        }

        return (
            <div className="space-y-8 p-2">
                <div className="flex flex-col gap-1 px-4">
                    <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter">
                        Admin Control Center
                    </h2>
                    <p className="text-slate-500 font-bold text-sm tracking-widest uppercase">
                        Manage your business at a glance
                    </p>
                </div>

                {/* ফেচ করা ডাটা প্রপস হিসেবে পাঠানো হলো */}
                <AdminOverview stats={stats} />
            </div>
        );
    } catch (error) {
        console.error("Dashboard Error:", error);
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="bg-rose-50 border-2 border-rose-200 rounded-lg p-8 max-w-md text-center">
                    <h2 className="text-2xl font-bold text-rose-900 mb-2">Dashboard Error</h2>
                    <p className="text-rose-700 mb-4">Failed to load dashboard data. Please try refreshing the page.</p>
                    <button onClick={() => window.location.reload()} className="px-4 py-2 bg-rose-600 text-white rounded hover:bg-rose-700">
                        Refresh
                    </button>
                </div>
            </div>
        );
    }
}