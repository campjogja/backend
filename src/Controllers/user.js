const model = require ('../Models/user');
const form = require ('../Helpers/form');

module.exports = {
  getAllUser: (_, res) => {
    model
      .getAllUser ()
      .then (response => {
        //resolve
        form.success (res, response);
      })
      .catch (err => {
        //reject
        console.log (err);
      });
  },
  postUser: (req, res) => {
    const {body} = req;
    model
      .postUser (body)
      .then (response => {
        // resolve
        const data = {
          id: response.insertId,
          username: body.username,
        };
        form.success (res, data);
      })
      .catch (err =>
        // reject
        console.log (err)
      );
  },
  patchUser: (req, res) => {
    const {params, query} = req;
    // res.json ({
    //   params,
    //   query,
    // });
    model
      .patchUser (query, params)
      .then (response => {
        //resolve
        res.json (response);
      })
      .catch (err =>
        //reject
        console.log (err)
      );
  },
};
