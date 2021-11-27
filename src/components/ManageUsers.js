import React, { useState, useEffect } from "react";
import { getAllUsers, editUser, getMyID } from "../api/users";

const ManageUsers = ({ isAdmin }) => {
  const [users, setUsers] = useState({});

  useEffect(() => {
    async function setUp() {
      try {
        let tmp = await getAllUsers();
        let myID = await getMyID();
        tmp = tmp.filter((user) => user.id !== myID.id);
        setUsers(tmp);
      } catch (err) {
        console.log(err);
      }
    }
    setUp();
  }, [isAdmin, users]);

  return (
    <div className="all-users-main-container">
      <h2>Manage Users</h2>
      {isAdmin ? (
        <div className="all-users">
          {users.length
            ? users.map((user) => {
                return (
                  <div className="single-user-card" key={user.id}>
                    <div>User ID: {user.id} </div>
                    <div>
                      Username:{" "}
                      <span className="single-user-name">{user.username}</span>
                    </div>
                    <div>
                      Account Type:{" "}
                      {user.isAdmin ? (
                        <div>
                          <span className="account-type-admin">Admin </span>
                          <span className="account-change-button">
                            <a
                              className="account-type-change-button"
                              onClick={async () => {
                                try {
                                  let res = await editUser(
                                    null,
                                    false,
                                    user.id
                                  );
                                } catch (err) {
                                  console.log(err);
                                }
                              }}
                            >
                              ▼
                            </a>
                          </span>
                        </div>
                      ) : (
                        <div>
                          <span className="account-type-regular">Regular </span>
                          <span className="account-change-button">
                            <a
                              className="account-type-change-button"
                              onClick={async () => {
                                try {
                                  let res = await editUser(null, true, user.id);
                                } catch (err) {
                                  console.log(err);
                                }
                              }}
                            >
                              ▲
                            </a>
                          </span>
                        </div>
                      )}
                    </div>
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
