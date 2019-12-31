const db = require ('../Configs/db');
module.exports = {
  getAllUser: () => {
    return new Promise ((resolve, reject) => {
      db.query ('SELECT * FROM user', (err, response) => {
        if (!err) {
          resolve (response);
        } else {
          reject (err);
        }
      });
    });
  },
  postUser: body => {
    return new Promise ((resolve, reject) => {
      db.query (
        'INSERT INTO user SET username=?',
        [body.username],
        (err, response) => {
          if (!err) {
            resolve (response);
          } else {
            reject (err);
          }
        }
      );
    });
  },
  patchUser: (query, params) => {
    return new Promise ((resolve, reject) => {
      db.query (
        'UPDATE user SET ? WHERE ?',
        [query, params],
        (err, response) => {
          if (!err) {
            resolve (response);
          } else {
            reject (err);
          }
        }
      );
    });
  },
};
