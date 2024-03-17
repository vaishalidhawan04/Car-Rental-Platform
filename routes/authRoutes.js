const express = require("express");
const User = require("../models/User");
const passport = require("passport");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("cars/initial");
});

router.get("/home", (req, res) => {
    const { city } = req.query;
    res.render("cars/index", { city });
})

router.get("/register", (req, res) => {
    res.render("auth/signup");
});

router.post("/register", async (req, res) => {
    let { username, email, password } = req.body;
    let newuser = new User({ username, email });
    try {
        await User.register(newuser, password);
        res.redirect("/home");
    }
    catch (err) {
        console.error(err);
        res.send("Error during registration");
    }
});

router.get("/login", (req, res) => {
    res.render("auth/login");
});

router.post(
    "/login",
    passport.authenticate("local", {
        failureRedirect: "/login",
    }),
    function (req, res) {
        res.redirect("/home");
    }
);

module.exports = router;
