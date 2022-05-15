const UserService = require('./../services/userService');

class UserController {
    static async getList() {
        return await UserService.getList();
    }

    static async getById(id) {
        return await UserService.getById(id);
    }

    static async create(user) {
        await UserService.create(user);
    }

    static async update(id, user) {
        await UserService.update(id, user);
    }

    static async delete(id) {
        await UserService.delete(id);
    }
}

module.exports = UserController;