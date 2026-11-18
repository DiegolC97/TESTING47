"use client";

import Link from "next/link";
import { formatCurrency, formatDate } from "@/lib/format";
import { getDashboardStats, getLatestSales } from "@/lib/stats";
import { useDealership } from "@/lib/store";

export default function HomePage() {
  const { data, ready } = useDealership();
  const stats = getDashboardStats(data);
  const latest = getLatestSales(data);

  const cards = [
    { label: "Cars in stock", value: String(stats.carsInStock), href: "/stock", hint: "Available to sell" },
    { label: "Sales this month", value: String(stats.salesThisMonth), href: "/sales", hint: "Closed this month" },
    { label: "Total revenue", value: formatCurrency(stats.totalRevenue), href: "/sales", hint: "From all sales" },
    { label: "Staff", value: String(stats.staffCount), href: "/personal", hint: "Team members" },
  ];

  return (
    <div className="space-y-10">
      <section className="rounded-2xl bg-gradient-to-br from-slate-900 to-blue-800 px-6 py-12 text-white sm:px-10">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">GBAutomotores</h1>
        <p className="mt-3 max-w-2xl text-slate-200">
          Your car dealership at a glance. Track the cars in stock, record sales and manage the team, all in one place.
        </p>
      </section>

      <section aria-label="Summary">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <Link
              key={c.label}
              href={c.href}
              className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-400 hover:shadow-md"
            >
              <p className="text-sm font-medium text-slate-500">{c.label}</p>
              <p className="mt-2 text-3xl font-semibold text-slate-900" data-testid={`stat-${c.label}`}>
                {ready ? c.value : "—"}
              </p>
              <p className="mt-1 text-xs text-slate-400 group-hover:text-blue-600">{c.hint} →</p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Latest sales</h2>
          <Link href="/sales" className="text-sm text-blue-600 hover:underline">
            View all
          </Link>
        </div>

        {!ready ? (
          <div className="rounded-xl border border-slate-200 bg-white p-6 text-slate-400">Loading…</div>
        ) : latest.length === 0 ? (
          <div className="rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center">
            <p className="font-medium text-slate-700">No sales yet</p>
            <p className="mt-1 text-sm text-slate-500">Sales you record will show up here.</p>
          </div>
        ) : (
          <ul className="divide-y divide-slate-200 overflow-hidden rounded-xl border border-slate-200 bg-white">
            {latest.map(({ sale, car, salesperson }) => (
              <li key={sale.id} className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <p className="truncate font-medium">
                    {car ? `${car.year} ${car.make} ${car.model}` : "Unknown car"}
                  </p>
                  <p className="truncate text-sm text-slate-500">
                    {sale.customerName} · sold by {salesperson?.name ?? "Unknown"}
                  </p>
                </div>
                <div className="flex shrink-0 items-baseline gap-3 sm:flex-col sm:items-end sm:gap-0">
                  <span className="font-semibold">{formatCurrency(sale.price)}</span>
                  <span className="text-sm text-slate-500">{formatDate(sale.date)}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
