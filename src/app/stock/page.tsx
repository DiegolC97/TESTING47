import type { Metadata } from "next";
import { ModulePlaceholder } from "@/components/ModulePlaceholder";

export const metadata: Metadata = { title: "Stock · GBAutomotores" };

export default function StockPage() {
  return <ModulePlaceholder title="Stock" description="Browse and manage the cars in the dealership." />;
}
