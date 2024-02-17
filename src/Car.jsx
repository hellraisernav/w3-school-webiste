function Car(props) {
  return <h2>Hi, I am a {props.brand.model} Car!</h2>;
}

function Garage() {
  const carInfo = { name: "Ford", model: "Mustang" };
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car brand={carInfo} />
    </>
  );
}

export default Garage;
