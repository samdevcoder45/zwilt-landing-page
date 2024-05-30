export default function Input({
  type = "text",
  placeholder,
  className,
  value,
  onBlur,
  onFocus,
  onChange,
  ...rest
}: {
  type: string;
  placeholder: string;
  className: string;
  value: string;
  onBlur: () => void;
  onFocus: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <input
      {...rest}
      value={value}
      type={type}
      onBlur={onBlur}
      onFocus={onFocus}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
    />
  );
}
