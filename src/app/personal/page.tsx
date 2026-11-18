import type { Metadata } from "next";
import { ModulePlaceholder } from "@/components/ModulePlaceholder";

export const metadata: Metadata = { title: "Personal · GBAutomotores" };

export default function PersonalPage() {
  return <ModulePlaceholder title="Personal" description="Manage the dealership's staff." />;
}
