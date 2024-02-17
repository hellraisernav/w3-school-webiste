function Football2() {
  const shoot = (a) => {
    alert(a);
  };
  return <button onClick={() => shoot("Goal!")}>Take The Shot!</button>;
}
export default Football2;
