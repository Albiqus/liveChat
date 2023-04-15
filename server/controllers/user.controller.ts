import { getValidData } from "../utils/getValidData"
const bcrypt = require('bcryptjs');
const db = require('../db')
const User = db.user

class UserController {
    async createUser(req: any, res: any) {
        try {
            const { nickname, password, repeatPass } = req.body

            const candidate = await User.findOne({ where: { nickname } })
            if (candidate) {
                return res.json('пользователь с таким ником уже существует')
            }

            const validData = getValidData(nickname, password, repeatPass)
            if (!validData.isValid) {
                return res.json({ errors: validData.errors })
            }

            const hashPassword = bcrypt.hashSync(password, 7);
            await User.create({ nickname: nickname, password: hashPassword })
            return res.json('пользователь успешно зарегистрирован')

        } catch (e) {
            return res.status(400).json('ошибка регистрации')
        }



    }
    async getUsers(req: any, res: any) {
        try {
            const users = await User.findAll();
            res.json(users)
        } catch (e) {

        }
    }
    async getOneUser(req: Request, res: Response) {
        try {

        } catch (e) {

        }
    }
    async updateUser(req: Request, res: Response) {
        try {

        } catch (e) {

        }
    }
    async deleteUser(req: Request, res: Response) {
        try {

        } catch (e) {

        }
    }
}


module.exports = new UserController()