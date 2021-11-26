import React, { useState, useEffect } from "react";
import {} from "./";
import { getAllUsers } from "../api/users";

const ManageUsers = ({ isAdmin }) => {
  const [users, setUsers] = useState({});
  console.log("Users: ", users);

  useEffect(() => {
    async function setUp() {
      try {
        let tmp = await getAllUsers();
        setUsers(tmp);
      } catch (err) {
        console.log(err);
      }
    }
    setUp();
  }, [isAdmin]);

  return (
    <div>
      <h2>Manage Users</h2>
      {console.log("ISADMIN: ", isAdmin)}
      {isAdmin ? (
        <div className="all-users">
          {users.length
            ? users.map((user) => {
                return (
                  <div className="single-user-card" key={user.id}>
                    <h3>User ID: {user.id} </h3>
                    <h3>Username: {user.name}</h3>
                    <h3>
                      Account Type:{" "}
                      {user.isAdmin ? (
                        <span className="account-type">Admin</span>
                      ) : (
                        <span className="account-type">Regular</span>
                      )}
                    </h3>
                  </div>
                );
              })
            : null}
        </div>
      ) : (
        <div> Error: You don't have permission for this function</div>
      )}
    </div>
  );
};

export default ManageUsers;
