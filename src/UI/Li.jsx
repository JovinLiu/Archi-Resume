function Li({ children, className }) {
  const style = "text-[0.75rem] -indent-5" + " " + className;
  return <li className={style}>{children}</li>;
}

export default Li;
