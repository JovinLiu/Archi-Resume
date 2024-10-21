function Button({ children, className }) {
  let style = className;

  return <button className={style}>{children}</button>;
}

export default Button;
