export default function Input({
  type = "text",
  placeholder,
  className,
  ...rest
}: {
  type: string;
  placeholder: string;
  className: string;
}) {
  return (
    <input
      {...rest}
      type={type}
      placeholder={placeholder}
      className={className}
    />
  );
}
