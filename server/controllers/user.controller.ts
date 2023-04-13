import { incorrectValuesErrorId } from "../data/errorIds";
import { getValidData } from "../utils/getValidData"
const bcrypt = require('bcryptjs');
const db = require('../db')
const User = db.user

class UserController {
    async createUser(req: any, res: any) {
        try {
            const { nickname, password, repeatPass } = req.body

            const candidate = await User.findOne({ where: { nickname } })

            const validData = getValidData(nickname, password, repeatPass, candidate)
            if (!validData.isValid) {
                return res.json({ errors: validData.errors })
            }
            
            const hashPassword = bcrypt.hashSync(password, 7);
            await User.create({ nickname: nickname, password: hashPassword })
            return res.json({ message: 'пользователь успешно зарегистрирован', nickname, isSuccessReg: true })

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
    async authUser(req: any, res: any) {
        try {
            const { nickname, password } = req.query

            const user = await User.findOne({ where: { nickname } })
            if (!user) {
                return res.json({ message: 'неправильный логин или пароль', isSuccessReg: false, errors: [incorrectValuesErrorId] })
            }

            const validPassword = bcrypt.compareSync(password, user.password)
            if (!validPassword) {
                return res.json({ message: 'неправильный логин или пароль', isSuccessReg: false, errors: [incorrectValuesErrorId] })
            }

            return res.json({ message: 'пользователь успешно авторизирован', userData: { nickname, id: user.id }, isSuccessAuth: true })
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