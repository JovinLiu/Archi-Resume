function Li({ children, className }) {
  const style = "text-sm -indent-5" + " " + className;
  return <li className={style}>{children}</li>;
}

export default Li;
