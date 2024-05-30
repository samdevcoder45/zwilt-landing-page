import clsx from "clsx";

export default function HeaderCard({
  className,
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx("rounded-15", className)}>{children}</div>
  );
}
