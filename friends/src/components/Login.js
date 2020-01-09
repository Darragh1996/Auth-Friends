import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Login(props) {
  const [details, setDetails] = useState({ username: "", password: "" });
  //   console.log(props);

  function handleChanges(event) {
    setDetails({
      ...details,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/login", {
        username: details.username,
        password: details.password
      })
      .then(res => {
        // console.log(typeof res.data.payload);
        localStorage.setItem("token", res.data.payload);
      })
      .catch(err => {
        console.log(err);
      });
    setDetails({ username: "", password: "" });
  }

  console.log(props);

  return (
    <div>
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          Username:
          <input
            name="username"
            value={details.username}
            onChange={event => handleChanges(event)}
          />
        </label>
        <label>
          Password:
          <input
            name="password"
            type="password"
            value={details.password}
            onChange={event => handleChanges(event)}
          />
        </label>
        <input type="submit" />
      </form>
      <Link to="/friends">Friends</Link>
      <button
        onClick={() => {
          props.history.push("/add-friend");
        }}
      >
        Add Friend
      </button>
    </div>
  );
}
