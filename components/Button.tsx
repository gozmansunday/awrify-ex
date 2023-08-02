import { ButtonHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, Props>(({
  className,
  children,
  disabled,
  type = "button",
  ...props
}, ref) => {
  return (
    <button
      type={type}
      className={twMerge(
        `rounded-full p-3 bg-yellow-500 text-black font-bold border border-transparent transition disabled:cursor-not-allowed disabled:opacity-50 hover:opacity-80`,
        className
      )}
      disabled={ disabled }
      ref={ref}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = "Button";

export default Button;