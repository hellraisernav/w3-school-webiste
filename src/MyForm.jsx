import { useState } from "react";
import ReactDom from "react-dom/client";

function MyForm() {
  // const defintions
  const [inputs, setInputs] = useState({});
  const [textarea, setTextarea] = useState("The Content");
  const [myCar, setMyCar] = useState("");

  // event handlers
  // textarea
  const textareaHandleChange = (event) => {
    setTextarea(event.target.value);
  };
  // select box (radio button)
  const selectHandleChange = (event) => {
    setMyCar(event.target.value);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  };

  // return form
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">
        Enter Your Name:
        <input
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Enter Your Age:
        <input
          type="number"
          name="age"
          value={inputs.age || ""}
          onChange={handleChange}
        />
      </label>
      <br />
      <textarea
        value={textarea}
        onChange={textareaHandleChange}
      />
      <br />
      <select
        value={myCar}
        onChange={selectHandleChange}
      >
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
      <input type="submit" />
    </form>
  );
}

export default MyForm;
