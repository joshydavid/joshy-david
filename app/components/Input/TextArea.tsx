type TextAreaProps = {
  value: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  onKeyDown: React.KeyboardEventHandler<HTMLTextAreaElement>;
};

function TextArea({
  value,
  placeholder,
  onChange,
  onKeyDown,
  ...props
}: TextAreaProps) {
  return (
    <textarea
      name="message"
      className="form-input px-4 py-3 rounded-lg border-0 dark:bg-slate-900 dark:text-white bg-slate-100"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      {...props}
    />
  );
}

export { TextArea };
