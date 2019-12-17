import React, { useState, useEffect } from "react";
import axiosWithAuth from "../axios/helper";

export default function(props) {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    // const token = localStorage.getItem("token");
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then(res => {
        console.log(res);
        setFriends(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Friends</h1>
      {friends.map(friend => {
        return <h2>{friend.name}</h2>;
      })}
    </div>
  );
}
