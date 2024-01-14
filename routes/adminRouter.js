const { adminGet, adminPost, adminDelete, adminUpdate } = require('../controller/adminController');

const router=require('express').Router();
const adminRoutes=()=>{
    router.get('/',adminGet(req,res))
    router.post('/',adminPost(req,res))
    router.patch('/',adminUpdate(req,res))
    router.delete('/',adminDelete(req,res))
}
module.exports= adminRoutes