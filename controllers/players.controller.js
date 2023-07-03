const query = require("../db/utils");

const findAllPlayers = async () => {
    return query("SELECT * FROM players")
}

module.exports = { findAllPlayers }