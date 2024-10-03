function Text({ children, type = "secondary", className }) {
  let style;

  if (type === "primary") style = "text-sm text-gray-500" + " " + className;
  if (type === "secondary") style = "text-sm text-gray-900" + " " + className;

  return <span className={style}>{children}</span>;
}

export default Text;
