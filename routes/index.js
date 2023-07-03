const express = require("express")
const homeRoutes = require("./home.routes")
const playersRoutes = require("./players.routes")

const router = express.Router()
router.get("/test", (req, res)=>{
    res.send("connected to /api/test get route!")
})

router.use("/home", homeRoutes)
router.use("/players", playersRoutes)





module.exports = router;