"use client";

import { useEffect } from "react";

export default function AdminDashboardError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error("Admin Dashboard Error:", error);
    }, [error]);

    return (
        <div className="flex items-center justify-center min-h-screen p-4">
            <div className="bg-rose-50 dark:bg-rose-950 border-2 border-rose-200 dark:border-rose-800 rounded-2xl p-8 max-w-md text-center shadow-lg">
                <div className="text-5xl mb-4">⚠️</div>
                <h2 className="text-2xl font-bold text-rose-900 dark:text-rose-100 mb-3">
                    Dashboard Error
                </h2>
                <p className="text-rose-700 dark:text-rose-300 text-sm mb-2">
                    {error.message || "Failed to load dashboard"}
                </p>
                <p className="text-rose-600 dark:text-rose-400 text-xs mb-6">
                    Error ID: {error.digest}
                </p>
                <div className="flex gap-3 justify-center">
                    <button
                        onClick={() => reset()}
                        className="px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition font-semibold text-sm"
                    >
                        Try Again
                    </button>
                    <button
                        onClick={() => window.location.href = "/"}
                        className="px-4 py-2 bg-slate-300 dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg hover:bg-slate-400 dark:hover:bg-slate-600 transition font-semibold text-sm"
                    >
                        Go Home
                    </button>
                </div>
            </div>
        </div>
    );
}
