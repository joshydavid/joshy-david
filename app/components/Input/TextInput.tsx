import { ChangeEvent, KeyDownEvent } from "@/helpers/type";

type TextInputProps = {
  type: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: ChangeEvent;
  onKeyDown: KeyDownEvent;
};

function TextInput({
  type,
  name,
  value,
  placeholder,
  onChange,
  onKeyDown,
  ...props
}: TextInputProps) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
      className="form-input px-4 py-3 rounded-lg border-0 dark:bg-slate-900 dark:text-white bg-slate-100"
      {...props}
    />
  );
}

export { TextInput };
