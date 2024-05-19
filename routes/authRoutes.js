const express = require("express");
const User = require("../models/User");
const passport = require("passport");
const router = express.Router();

router.get("/register", (req, res) => {
    res.render("auth/signup");
});

router.post("/register", async (req, res) => {
    let { username, email, password } = req.body;
    let newuser = new User({ username, email });
    try {
        await User.register(newuser, password);
        res.redirect("/");
    }
    catch (err) {
        console.error(err);
        res.send("Error during registration");
    }
});

router.get("/login", (req, res) => {
    res.render("auth/login", {isLogin : req.user !== undefined});
});

router.post(
    "/login",
    passport.authenticate("local", {
        failureRedirect: "/login",
    }),
    function (req, res) {

        res.redirect("/");
    }
);

router.get("/logout", (req, res) => {
    req.logout(function(err) {
        if(err) {
            console.error(err);
            res.send("Error during logout");
        } 
        else {
            res.redirect("/login");
        }
    });
});


module.exports = router;
