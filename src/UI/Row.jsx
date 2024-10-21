function Row({ children, className }) {
  const style = `flex flex-row` + " " + className;

  return <div className={style}>{children}</div>;
}

export default Row;
