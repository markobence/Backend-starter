const  express = require("express")
const {dbFunctions} = require('../database/dbFunc')
const router = express.Router();

        //▄▄▄        ▄• ▄▌▄▄▄▄▄▄▄▄ ..▄▄ · 
        //▀▄ █·▪     █▪██▌•██  ▀▄.▀·▐█ ▀. 
        //▐▀▀▄  ▄█▀▄ █▌▐█▌ ▐█.▪▐▀▀▪▄▄▀▀▀█▄
        //▐█•█▌▐█▌.▐▌▐█▄█▌ ▐█▌·▐█▄▄▌▐█▄▪▐█
        //.▀  ▀ ▀█▄▀▪ ▀▀▀  ▀▀▀  ▀▀▀  ▀▀▀▀ 

// router.get("/users", async function(req, res, next) {
//     try {
//         res.json(await dbFunctions.getUsers());
//     } catch (err) {
//         console.error("Error while getting users!", err.message);
//         next(err);
//     }
// })

// router.get("/users/:id", async function(req,res) {
//     try {
//         res.json(await dbFunctions.getUserById(req,res))
//     } catch (err) {
//         console.error("Error getting user by id!", err.message)
//     }
// })

// router.delete("/users/remove/:id", [verifyToken], [isAdmin], async function(req, res) {
//     try {
//         res.json(await userController.removeUsers(req, res, req.params.id));
//     } catch (err) {
//         console.error("Error updating!", err.message);
//     }
// })

router.get("/", async function(req,res) {
    try {
        res.json(await dbFunctions.getAll(req,res))
    } catch (err) {
        console.error("ErroR!", err.message)
    }
})

module.exports = {
    router
}