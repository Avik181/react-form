import { useState } from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = useState({
    fname: "",
    lname: "",
    email: ""
  });

  const inputEvent = (e) => {
    const { value, name } = e.target;

    setName((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  };

  const onSubmits = (e) => {
    e.preventDefault();
    alert("Form Submitted");
  };

  return (
    <div className="App">
      <h1>
        Hello {name.fname} {name.lname}
      </h1>
      <h3> {name.email} </h3>
      <form className="App" onSubmit={onSubmits}>
        <input
          type="text"
          name="fname"
          placeholder="Enter your first name"
          onChange={inputEvent}
          value={name.fname}
        />
        <input
          type="text"
          name="lname"
          placeholder="Enter your last name"
          onChange={inputEvent}
          value={name.lname}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={inputEvent}
          value={name.email}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
