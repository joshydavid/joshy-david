import { cva, VariantProps } from "class-variance-authority";

const buttonStyles = cva("rounded-lg px-4 py-3 w-full text-sm", {
  variants: {
    intent: {
      primary:
        "bg-blue-300 hover:bg-blue-400 text-black dark:bg-blue-900 dark:text-white dark:hover:bg-blue-800",
      black:
        "bg-slate-100 hover:bg-slate-200 text-black dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800",
      danger:
        "bg-red-400 hover:bg-red-500 text-black dark:bg-red-600 dark:text-white dark:hover:bg-red-500",
    },
    defaultVariants: {
      intent: "primary",
    },
  },
});

interface ButtonProps extends VariantProps<typeof buttonStyles> {
  children: any;
  onClick?: any;
}

export default function Button({ intent, children, ...props }: ButtonProps) {
  return (
    <button
      className={`flex justify-center items-center ${buttonStyles({
        intent,
      })}`}
      {...props}
    >
      {children}
    </button>
  );
}
