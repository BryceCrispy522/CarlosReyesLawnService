import { StarIcon } from "./icons";

export function StarRow({ label }: { label?: string }) {
  return (
    <div
      className="flex items-center gap-0.5 text-lime-deep"
      role="img"
      aria-label={label ?? "5 out of 5 stars"}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} />
      ))}
    </div>
  );
}
