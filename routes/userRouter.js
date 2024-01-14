const { userGet, userPost, userDelete, userUpdate } = require('../controller/userController');
const express=require('express');
const router = express.Router();

router.get('/get', (req,res)=>userGet(req, res))
router.post('/post', (req,res)=>userPost(req, res))
router.patch('/patch/:userId', (req,res)=>userUpdate(req, res))
router.delete('/delete', (req,res)=>userDelete(req, res))

module.exports = router
