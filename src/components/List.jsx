import React, { useState } from "react";

const List = ({ users, setUsers }) => {
  const [data, setData] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
  });

  const handleChange = (e) => {
    console.log(data);
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setUsers([...users, { ...data, id: users.length + 1 }]);
  };
  return (
    <div>
      <ul>
        {users.map((user) => {
          return (
            <div>
              <li key={user.id}>
                {" "}
                <span>{user.id}: </span>
                {user.name}
              </li>
              <br />
            </div>
          );
        })}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            className="border"
            type="text"
            name="name"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input
            className="border"
            type="text"
            name="username"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            className="border"
            type="email"
            name="email"
            onChange={handleChange}
          />
        </div>
        <button className="border " type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default List;
