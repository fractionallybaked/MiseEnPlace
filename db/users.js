const { client } = require("./client");

async function createUser({ username, password, isAdmin }) {
  let isAdminBoolean = true;
  if (!isAdmin) {
    isAdminBoolean = false;
  }
  try {
    const {
      rows: [user],
    } = await client.query(
      `
        INSERT INTO users(username, password, "isAdmin")
        VALUES ($1, $2, $3)
        RETURNING *;
      `,
      [username, password, isAdminBoolean]
    );

    delete user.password;
    return user;
  } catch (error) {
    throw error;
  }
}

async function getUser({ username, password }) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
        SELECT * FROM users
        WHERE username = $1;
      `,
      [username]
    );

    if (user) {
      if (user.password !== password) {
        return;
      }
    } else return;
    delete user.password;
    return user;
  } catch (error) {
    throw error;
  }
}

async function getUserByUsername(username) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
        SELECT id, username FROM users
        WHERE username = $1;
      `,
      [username]
    );

    return user;
  } catch (error) {
    throw error;
  }
}

async function getUserById(id) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
        SELECT * FROM users
        WHERE id = $1;
      `,
      [id]
    );

    return user;
  } catch (error) {
    throw error;
  }
}

async function getAllUsers(id) {
  try {
    const admin = await getUserById(id);

    const { rows: users } = await client.query(`
        SELECT * FROM users;
      `);

    if (!admin.isAdmin) return [];
    else {
      users.map((e) => {
        delete e.password;
        return e;
      });
      return users;
    }
  } catch (error) {
    throw error;
  }
}

async function editUser({ password, isAdmin, targetID, id }) {
  try {
    const admin = await getUserById(id);
    console.log("adminID: ", id);
    console.log("UserMAYBEADMIN: ", admin);
    if (admin.isAdmin && id === targetID) {
      //admin changing own password/account type
      if (password !== null) {
        //change admin status
        const {
          rows: [user],
        } = await client.query(
          `
            UPDATE users
            SET password=$1
            WHERE id=$2
            RETURNING *;
          `,
          [password, targetID]
        );
        delete user.password;
        return user;
      } else {
        //change password
        const {
          rows: [user],
        } = await client.query(
          `
            UPDATE users
            SET password=$1,
            WHERE id=$2
            RETURNING *;
          `,
          [password, targetID]
        );
        delete user.password;
        return user;
      }
    } else if (admin.isAdmin && id !== targetID) {
      //admin changing other user account type
      const {
        rows: [user],
      } = await client.query(
        `
          UPDATE users
          SET "isAdmin"=$1
          WHERE id=$2
          RETURNING *;
        `,
        [isAdmin, targetID]
      );
      console.log("TARGET: ", targetID);
      console.log("returned user: ", user);
      delete user.password;
      return user;
    } else if (!admin.isAdmin) {
      //user changing own password
      const {
        rows: [user],
      } = await client.query(
        `
          UPDATE users
          SET password=$1
          WHERE id=$2
          RETURNING *;
        `,
        [password, targetID]
      );
      delete user.password;
      return user;
    }
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createUser,
  getUser,
  getUserById,
  getUserByUsername,
  getAllUsers,
  editUser,
};
