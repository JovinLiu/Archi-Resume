function Title({ children, type, className }) {
  let style;

  if (type === "master1") style = "text-4xl text-black" + " " + className;
  if (type === "master2") style = "text-xl text-black" + " " + className;
  if (type === "primary") style = "text-lg" + " " + className;
  if (type === "secondary") style = "text-md text-grey-400" + " " + className;

  return <span className={style}>{children}</span>;
}

export default Title;
