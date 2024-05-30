export default function Label({
  htmlFor,
  className,
  children,
  ...rest
}: {
  htmlFor: string;
  className: string;
  children:React.ReactNode
}) {
  return <label {...rest} htmlFor={htmlFor} className={className}>{children}</label>;
}
