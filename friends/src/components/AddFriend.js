import React, { useState } from "react";
import axiosWithAuth from "../axios/helper";

export default function AddFriend(props) {
  const [friend, setFriend] = useState({ name: "", age: "", email: "" });

  function handleChanges(event) {
    setFriend({
      ...friend,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    axiosWithAuth()
      .post("http://localhost:5000/api/friends", friend)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    setFriend({ name: "", age: "", email: "" });
  }

  return (
    <form onSubmit={event => handleSubmit(event)}>
      <label>
        Name:
        <input
          name="name"
          value={friend.name}
          onChange={event => handleChanges(event)}
        />
      </label>
      <label>
        Age:
        <input
          name="age"
          value={friend.age}
          onChange={event => handleChanges(event)}
        />
      </label>
      <label>
        email:
        <input
          name="email"
          value={friend.email}
          onChange={event => handleChanges(event)}
        />
      </label>
      <input type="submit" />
    </form>
  );
}
