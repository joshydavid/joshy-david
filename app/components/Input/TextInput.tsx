import { KeyDownEvent } from "@/helpers/type";

type TextInputProps = {
  type: string;
  name: string;
  placeholder: string;
  onKeyDown: KeyDownEvent;
};

function TextInput({
  type,
  name,
  placeholder,
  onKeyDown,
  ...props
}: TextInputProps) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onKeyDown={onKeyDown}
      className="form-input rounded-lg border-0 bg-slate-100 px-4 py-3 dark:bg-slate-900 dark:text-white"
      {...props}
    />
  );
}

export { TextInput };
