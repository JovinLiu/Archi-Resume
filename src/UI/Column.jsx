function Column({ children, className }) {
  const style = "flex flex-col" + " " + className;
  return <div className={style}>{children}</div>;
}

export default Column;
