import { isSameMonth } from "./format";
import type { Car, DealershipData, Sale, StaffMember } from "./types";

export interface DashboardStats {
  carsInStock: number;
  salesThisMonth: number;
  totalRevenue: number;
  staffCount: number;
}

export function getDashboardStats(data: DealershipData, now: Date = new Date()): DashboardStats {
  return {
    carsInStock: data.cars.filter((c) => c.status === "available").length,
    salesThisMonth: data.sales.filter((s) => isSameMonth(s.date, now)).length,
    totalRevenue: data.sales.reduce((sum, s) => sum + s.price, 0),
    staffCount: data.staff.length,
  };
}

export interface SaleDetails {
  sale: Sale;
  car?: Car;
  salesperson?: StaffMember;
}

/** Most recent sales first, joined with their car and salesperson. */
export function getLatestSales(data: DealershipData, limit = 5): SaleDetails[] {
  return [...data.sales]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, limit)
    .map((sale) => ({
      sale,
      car: data.cars.find((c) => c.id === sale.carId),
      salesperson: data.staff.find((s) => s.id === sale.salespersonId),
    }));
}
