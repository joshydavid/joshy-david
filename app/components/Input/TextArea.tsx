import { KeyDownEvent } from "@/helpers/type";

type TextAreaProps = {
  placeholder: string;
  onKeyDown: KeyDownEvent;
};

function TextArea({ placeholder, onKeyDown, ...props }: TextAreaProps) {
  return (
    <textarea
      name="message"
      rows={4}
      className="form-input px-4 py-3 rounded-lg border-0 dark:bg-slate-900 dark:text-white bg-slate-100"
      placeholder={placeholder}
      onKeyDown={onKeyDown}
      {...props}
    />
  );
}

export { TextArea };
