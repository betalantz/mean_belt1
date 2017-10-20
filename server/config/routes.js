const path = require("path")

const users = require("./../controllers/users.js")

module.exports = app => {
    app.post("/login", users.login)
    app.get("/logout", users.logout)
    app.get('/login_stat', users.login_stat)
    app.get("*", (req, res) => res.sendFile(path.resolve("./client/dist/index.html")))
}