import React, { useState, useEffect } from "react";
import { getMyID, editUser } from "../api/users";

const ChangePassword = ({ isLoggedIn }) => {
  const [password, setPassword] = useState("");
  const [conPass, setConPass] = useState("");
  const [userId, setUserId] = useState("");
  const [changed, setChanged] = useState(false);

  useEffect(() => {
    async function getID() {
      const user = await getMyID();
      setUserId(user.id);
    }
    getID();
  }, [changed]);

  return (
    <div>
      {isLoggedIn ? (
        !changed ? (
          <>
            <h3>Create a New Password</h3>
            <form
              className="create-password-form"
              onSubmit={async (e) => {
                e.preventDefault();
                try {
                  if (!password || !conPass) {
                    alert("Please fill out all product fields");
                  } else if (password !== conPass) {
                    alert(
                      "Passwords do not match, please make confirm password"
                    );
                  } else {
                    await editUser(password, false, userId);
                    setChanged(true);
                    setPassword("");
                    setConPass("");
                  }
                } catch (err) {
                  console.log(err);
                }
              }}
            >
              <label htmlFor="new-password">Set a New Password</label>
              <input
                type="text"
                id="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="New Password"
              />
              <div>
                <label htmlFor="con-password">Confirm New Password</label>
                <input
                  type="text"
                  id="con-password"
                  value={conPass}
                  onChange={(e) => setConPass(e.target.value)}
                  placeholder="Confirm new password"
                />
              </div>
              <button>Set New Password</button>
            </form>
          </>
        ) : (
          <div className="password-changed-message">
            Password successfully changed!
          </div>
        )
      ) : (
        <div> Error: You don't have permission for this function </div>
      )}
    </div>
  );
};

export default ChangePassword;
