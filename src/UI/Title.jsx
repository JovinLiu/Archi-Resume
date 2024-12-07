function Title({ children, type, className }) {
  let style;

  if (type === "master1") style = "text-3xl text-sky-800" + " " + className;
  if (type === "master2") style = "text-md text-sky-800" + " " + className;
  if (type === "primary") style = "text-lg text-sky-800" + " " + className;
  if (type === "secondary") style = "text-md text-grey-400" + " " + className;

  return (
    <span className={style}>
      <strong>{children}</strong>
    </span>
  );
}

export default Title;
