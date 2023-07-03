const connection = require("./index")

const query = (queryString, values) => {
    return new Promise((resolve,reject)=> {
        connection.query(queryString, values, (err, result)=> {
            if (err) reject(err);
            resolve(result)
        })
    })
}

module.exports = query;