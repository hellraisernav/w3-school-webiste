function Football3() {
  const shoot = (a, b) => {
    alert(b.type);
  };
  return (
    <button onClick={(event) => shoot("Goal!", event)}>
      Take The Bloody Shot!
    </button>
  );
}

export default Football3;
