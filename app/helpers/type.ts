type ChangeEvent = React.ChangeEventHandler<
  HTMLInputElement | HTMLTextAreaElement
>;
type KeyDownEvent = React.KeyboardEventHandler<
  HTMLInputElement | HTMLTextAreaElement
>;
type ClickHandler = React.MouseEventHandler<HTMLButtonElement>;

export type { ChangeEvent, ClickHandler, KeyDownEvent };
