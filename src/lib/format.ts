const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export function formatCurrency(value: number): string {
  return currency.format(value);
}

/** Formats an ISO date (YYYY-MM-DD) without timezone shifts. */
export function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

/** True when the ISO date falls in the same calendar month as `now`. */
export function isSameMonth(iso: string, now: Date = new Date()): boolean {
  const [y, m] = iso.split("-").map(Number);
  return y === now.getFullYear() && m === now.getMonth() + 1;
}
