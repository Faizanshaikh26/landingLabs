import express from "express"
import { loginAdmin, registerAdmin } from "../../controllers/admin/auth.js"


const router = express.Router()

router.post('/new', registerAdmin)
router.post('/login', loginAdmin)


export default router