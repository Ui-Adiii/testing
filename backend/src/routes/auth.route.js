import express from 'express'
import { deleteUser, login, logOut, register } from '../controllers/user.controller.js'
import checkAuth from '../middlewares/auth.middleware.js'

const router = express.Router()

router.post('/login', login)
router.post('/register', register)
router.delete("/delete",checkAuth,  deleteUser);
router.get('/logout', logOut)


export default router