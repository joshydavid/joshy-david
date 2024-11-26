import { KeyDownEvent } from "@/helpers/type";

type TextAreaProps = {
  placeholder: string;
  onKeyDown: KeyDownEvent;
};

function TextArea({
  placeholder,
  onKeyDown,
  ...props
}: Readonly<TextAreaProps>) {
  return (
    <textarea
      name="message"
      rows={4}
      className="form-input rounded-lg border-0 bg-slate-100 px-4 py-3 dark:bg-slate-900 dark:text-white"
      placeholder={placeholder}
      onKeyDown={onKeyDown}
      {...props}
    />
  );
}

export { TextArea };
