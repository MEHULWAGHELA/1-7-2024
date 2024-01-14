const adminRoutes = require('./adminRouter');
const userRoutes = require('./userRouter');
const express = require('express');

const router=express.Router();

router.use("/user",userRoutes)
router.use("/admin",adminRoutes)

module.exports= router