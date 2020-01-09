import React, { useState, useEffect } from "react";
import axiosWithAuth from "../axios/helper";

export default function(props) {
  const [friends, setFriends] = useState([]);
  //   const [isLoading, setIsLoading] = useState(false);

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

  return friends.length === 0 ? (
    <h2>...Loading</h2>
  ) : (
    <div>
      <h1>Friends</h1>
      {friends.map(friend => {
        return <h2>{friend.name}</h2>;
      })}
    </div>
  );
}
