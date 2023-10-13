import "./App.css";
import List from "./components/List";
import React, { useState } from "react";

const defaultUsers = [
  {
    id: 1,
    name: "Leanne dGraham",
    username: "Bret",
    email: "test@gmail.com",
  },
  {
    id: 2,
    name: "Leanne sdGraham",
    username: "Bret",
    email: "test@gmail.com",
  },
  {
    id: 3,
    name: "Leanne sdGraham",
    username: "Bret",
    email: "test@gmail.com",
  },
  {
    id: 4,
    name: "Leanne Grdfdfaham",
    username: "Bret",
    email: "test@gmail.com",
  },
  {
    id: 5,
    name: "Leanne Grfdfdfaham",
    username: "Bret",
    email: "test@gmail.com",
  },
];

function App() {
  const [users, setUsers] = useState(defaultUsers);
  return (
    <div className="flex justify-center mt-4">
      <List users={users} setUsers={setUsers} />
    </div>
  );
}

export default App;
