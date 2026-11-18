import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center py-16 text-center">
      <p className="text-6xl font-bold text-blue-600">404</p>
      <h1 className="mt-4 text-2xl font-semibold">Page not found</h1>
      <p className="mt-2 text-slate-500">
        Looks like this road doesn&apos;t lead anywhere. Let&apos;s get you back on track.
      </p>
      <Link href="/" className="mt-6 rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">
        Back to home
      </Link>
    </div>
  );
}
