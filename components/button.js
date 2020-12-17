const Button = ({ children, className, to, ...props }) => {
  const classnames = [
    "bg-gray-50",
    "duration-300",
    "hover:bg-opacity-80",
    "inline-block",
    "px-4",
    "py-2",
    "rounded-sm",
    "text-gray-800",
    "transition-colors"
  ]
    .concat(className)
    .join(" ")

  if (to) {
    return (
      <a className={classnames} href={to} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classnames} {...props}>
      {children}
    </button>
  )
}

export default Button
