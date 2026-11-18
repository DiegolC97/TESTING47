import type { Metadata } from "next";
import { ModulePlaceholder } from "@/components/ModulePlaceholder";

export const metadata: Metadata = { title: "Sales · GBAutomotores" };

export default function SalesPage() {
  return <ModulePlaceholder title="Sales" description="Record and review car sales." />;
}
