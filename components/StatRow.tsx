type Stat = { value: string; label: string };

export function StatRow({
  stats,
  tone = "light",
}: {
  stats: Stat[];
  tone?: "light" | "dark";
}) {
  const valueColor = tone === "dark" ? "text-lime" : "text-green-700";
  const labelColor = tone === "dark" ? "text-sand-2/80" : "text-muted";
  const divider = tone === "dark" ? "bg-white/15" : "bg-ink/10";

  return (
    <dl className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12">
      {stats.map((stat, i) => (
        <div key={stat.label} className="flex items-center gap-8 sm:gap-12">
          <div className="text-center">
            <dt className={`font-display text-3xl font-extrabold sm:text-4xl ${valueColor}`}>
              {stat.value}
            </dt>
            <dd className={`mt-1 text-sm font-medium ${labelColor}`}>{stat.label}</dd>
          </div>
          {i < stats.length - 1 && (
            <span aria-hidden className={`hidden h-10 w-px sm:block ${divider}`} />
          )}
        </div>
      ))}
    </dl>
  );
}
