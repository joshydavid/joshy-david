function TextArea({
  value,
  placeholder,
  onChange,
  onKeyDown,
}: {
  value: string;
  placeholder: string;
  onChange: any;
  onKeyDown: any;
}) {
  return (
    <textarea
      name="message"
      className="form-input px-4 py-3 rounded-lg border-0 dark:bg-slate-900 dark:text-white bg-slate-100"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
}

export { TextArea };
