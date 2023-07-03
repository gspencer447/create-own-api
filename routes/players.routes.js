const express = require("express")
const players = require("../controllers/players.controller")

const router = express.Router();

router.get("/players", async(req, res)=> {
    let data;
    data = await players.findAllPlayers()
    res.json(data)
})

router.post("/players", (req, res)=>{
    res.status(201)
    // console.log(res)
    const responseBody = {
        body: req.body,
        url: req.url,
        method: req.method
    }
    res.json(responseBody)
    res.end()
})

module.exports = router;