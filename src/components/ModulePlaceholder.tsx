import Link from "next/link";

export function ModulePlaceholder({ title, description }: { title: string; description: string }) {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center">
        <p className="text-slate-700">{description}</p>
        <p className="mt-1 text-sm text-slate-500">This module is coming soon.</p>
        <Link href="/" className="mt-4 inline-block text-sm text-blue-600 hover:underline">
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
