import React, { useState, useEffect } from "react";
import { getAllUsers, editUser, getMyID } from "../api/users";

const ManageUsers = ({ isAdmin }) => {
  const [users, setUsers] = useState({});
  const [myId, setMyId] = useState({});

  useEffect(() => {
    async function setUp() {
      try {
        let tmp = await getAllUsers();
        setMyId(await getMyID());
        tmp = tmp.filter((user) => user.id !== myId.id);
        setUsers(tmp);
      } catch (err) {
        console.error(err);
      }
    }
    setUp();
  }, []);

  return (
    <div className="all-users-main-container">
      <h3>Manage Users</h3>
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
                                  await editUser(null, false, user.id);
                                  let tmp = await getAllUsers();
                                  tmp = tmp.filter(
                                    (user) => user.id !== myId.id
                                  );
                                  setUsers(tmp);
                                } catch (err) {
                                  console.error(err);
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
                                  await editUser(null, true, user.id);
                                  let tmp = await getAllUsers();
                                  tmp = tmp.filter(
                                    (user) => user.id !== myId.id
                                  );
                                  setUsers(tmp);
                                } catch (err) {
                                  console.error(err);
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
