const db = require('../data-base')

class UserController {
    async createUser(req: any, res: any) {
        const { nickname, password } = req.body
        console.log(nickname, '-------------',password)
    }
    async getUsers(req: Request, res: Response) {

    }
    async getOneUser(req: Request, res: Response) {

    }
    async updateUser(req: Request, res: Response) {

    }
    async deleteUser(req: Request, res: Response) {
        
    }
}


module.exports = new UserController()