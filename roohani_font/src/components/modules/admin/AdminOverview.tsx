"use client";

import {
    LayoutGrid, ShoppingBag, Users, Package,
    TrendingUp, Activity, DollarSign, Wallet,
    ArrowUpRight
} from "lucide-react";
import { IDashboardStats } from "@/src/types/stats.type";
import {
    PieChart, Pie, Cell, ResponsiveContainer,
    Tooltip
} from "recharts";

interface AdminOverviewProps {
    stats: IDashboardStats | null;
}

export default function AdminOverview({ stats }: AdminOverviewProps) {
    if (!stats) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                    <p className="text-slate-500 font-semibold">Loading dashboard data...</p>
                </div>
            </div>
        );
    }

    try {
        const displayStats = [
            { label: "Categories", value: stats?.category?.total || 0, icon: LayoutGrid, color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-900/20" },
            { label: "Total Products", value: stats?.product?.total || 0, icon: Package, color: "text-[#E8939B]", bg: "bg-[#FDF8F9] dark:bg-[#E8939B]/10" },
            { label: "Total Orders", value: stats?.order?.totalOrders || 0, icon: ShoppingBag, color: "text-emerald-500", bg: "bg-emerald-50 dark:bg-emerald-900/20" },
            { label: "Customers", value: stats?.user?.customer || 0, icon: Users, color: "text-amber-500", bg: "bg-amber-50 dark:bg-amber-900/20" },
        ];

        const totalProducts = stats?.product?.total || 1;
        const stockData = [
            { name: "In Stock", value: stats?.product?.total || 0, color: "#E8939B" },
            { name: "Low Stock", value: 0, color: "#6366F1" },
            { name: "Out of Stock", value: 0, color: "#F43F5E" },
        ];

        const orderDistribution = [
            { name: "Pending", value: stats?.order?.pending || 0, color: "#f8b12c" },
            { name: "Confirmed", value: stats?.order?.confirmed || 0, color: "#1317fc" },
            { name: "Shipped", value: stats?.order?.shipped || 0, color: "#ff18ba" },
            { name: "Delivered", value: stats?.order?.delivered || 0, color: "#13dd6e" },
            { name: "Cancelled", value: stats?.order?.cancelled || 0, color: "#f70606" },
        ].filter(item => item.value >= 0);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const CustomTooltip = ({ active, payload }: any) => {
            if (active && payload && payload.length) {
                const data = payload[0].payload;
                const percentage = ((data.value / totalProducts) * 100).toFixed(1);
                return (
                    <div className="bg-white dark:bg-slate-900 p-3 md:p-4 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800">
                        <p className="text-[10px] font-black uppercase text-slate-400 mb-1">{data.name}</p>
                        <p className="text-base md:text-lg font-black italic text-slate-900 dark:text-white">
                            {data.value} <span className="text-[#E8939B] text-xs">({percentage}%)</span>
                        </p>
                    </div>
                );
            }
            return null;
        };

        return (
            <div className="space-y-6 md:space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-1000 p-4 md:p-6 lg:p-8 bg-transparent">

                {/* --- Title Section --- */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="space-y-2 text-center lg:text-left">
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white uppercase italic leading-none">
                            Admin <span className="text-[#E8939B]">Command</span> Center
                        </h2>
                        <div className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 flex items-center justify-center lg:justify-start gap-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            LIVE ANALYTICS ACTIVE
                        </div>
                    </div>

                    <div className="bg-slate-900 dark:bg-slate-800 text-white px-6 py-4 rounded-3xl md:rounded-[2rem] shadow-xl flex items-center justify-center gap-4 self-center lg:self-auto">
                        <div>
                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Global Performance</p>
                            <p className="text-lg font-black italic">+24.8% <TrendingUp size={16} className="inline text-emerald-500 ml-1" /></p>
                        </div>
                    </div>
                </div>

                {/* --- 1. Stats Grid (Responsive) --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {displayStats.map((stat, i) => (
                        <div key={i} className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-3xl md:rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl group hover:-translate-y-2 transition-all duration-500">
                            <div className="flex justify-between items-start mb-6">
                                <div className={`${stat.bg} ${stat.color} p-4 rounded-2xl group-hover:rotate-6 transition-transform duration-500`}>
                                    <stat.icon size={24} strokeWidth={2.5} />
                                </div>
                                <ArrowUpRight size={20} className="text-slate-200 dark:text-slate-700 group-hover:text-[#E8939B]" />
                            </div>
                            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">{stat.label}</p>
                            <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mt-1 italic tracking-tighter">{stat.value}</h3>
                        </div>
                    ))}
                </div>

                {/* --- Charts Section --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

                    {/* 2. Stock Status */}
                    <div className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-3xl md:rounded-[3.5rem] border border-slate-100 dark:border-slate-800 shadow-xl">
                        <div className="flex items-center justify-between mb-8">
                            <h4 className="text-base md:text-lg font-black uppercase italic tracking-tighter dark:text-white">Stock Status</h4>
                            <Package size={20} className="text-[#E8939B]" />
                        </div>

                        <div className="h-[250px] md:h-[280px] w-full relative">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={stockData}
                                        innerRadius={60}
                                        outerRadius={90}
                                        paddingAngle={8}
                                        dataKey="value"
                                        stroke="none"
                                    >
                                        {stockData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip content={<CustomTooltip />} />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="flex flex-wrap justify-center gap-4 mt-4">
                            {stockData.map((item, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                                    <span className="text-[9px] font-black uppercase text-slate-400">{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 3. Order Performance */}
                    <div className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-3xl md:rounded-[3.5rem] border border-slate-100 dark:border-slate-800 shadow-xl flex flex-col">
                        <div className="flex items-center justify-between mb-8">
                            <h4 className="text-base md:text-lg font-black uppercase italic tracking-tighter dark:text-white">Order Lifecycle</h4>
                            <Activity size={20} className="text-emerald-500" />
                        </div>

                        <div className="relative flex-1 flex items-center justify-center min-h-[250px]">
                            <ResponsiveContainer width="100%" height={260}>
                                <PieChart>
                                    <Pie
                                        data={orderDistribution}
                                        innerRadius={75}
                                        outerRadius={100}
                                        dataKey="value"
                                        stroke="none"
                                        paddingAngle={2}
                                    >
                                        {orderDistribution.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                            <div className="absolute flex flex-col items-center">
                                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Total</span>
                                <span className="text-4xl md:text-5xl font-black italic text-slate-900 dark:text-white tracking-tighter">
                                    {stats?.order?.totalOrders || 0}
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-center gap-2 mt-6">
                            {orderDistribution.map((item, i) => (
                                <div key={i} className="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 rounded-full border border-slate-100 dark:border-slate-700">
                                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }} />
                                    <span className="text-[8px] font-black uppercase text-slate-500 dark:text-slate-400">{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 4. Total Revenue (Premium Dark Card) */}
                    <div className="bg-slate-900 dark:bg-slate-950 p-6 md:p-8 rounded-3xl md:rounded-[3.5rem] text-white flex flex-col justify-between shadow-2xl md:col-span-2 lg:col-span-1">
                        <div className="flex items-center justify-between">
                            <div className="bg-white/10 p-4 rounded-2xl">
                                <Wallet className="text-[#E8939B]" size={28} />
                            </div>
                            <div className="text-right">
                                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none mb-1">Total Earnings</p>
                                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs justify-end">
                                    <TrendingUp size={12} /> +12%
                                </div>
                            </div>
                        </div>

                        <div className="my-8 md:my-10">
                            <p className="text-xs font-black text-slate-400 uppercase tracking-[0.4em] mb-2 italic">Net Revenue Flow</p>
                            <h3 className="text-4xl sm:text-5xl md:text-6xl font-black italic tracking-tighter truncate">
                                ৳{stats?.order?.totalRevenue?.toLocaleString() || 0}
                            </h3>
                        </div>

                        <div className="space-y-3">
                            <div className="bg-white/5 p-4 rounded-2xl md:rounded-[2rem] border border-white/10 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-1 h-6 bg-emerald-500 rounded-full" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">Delivered Net</span>
                                </div>
                                <span className="font-black italic text-emerald-500">৳{stats?.order?.deliveredAmount?.toLocaleString() || 0}</span>
                            </div>

                            <div className="bg-[#E8939B] p-5 rounded-2xl md:rounded-[2rem] flex items-center justify-center gap-3 shadow-lg shadow-[#E8939B]/20 cursor-pointer hover:scale-[1.02] transition-all">
                                <span className="font-black uppercase text-xs tracking-[0.2em] text-white">Financial Overview</span>
                                <DollarSign size={18} className="text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error("AdminOverview Error:", error);
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <div className="bg-rose-50 dark:bg-rose-950 border-2 border-rose-200 dark:border-rose-800 rounded-lg p-8 max-w-md text-center">
                    <h2 className="text-2xl font-bold text-rose-900 dark:text-rose-100 mb-2">Component Error</h2>
                    <p className="text-rose-700 dark:text-rose-300 text-sm">{error instanceof Error ? error.message : "Failed to render dashboard"}</p>
                </div>
            </div>
        );
    }
}