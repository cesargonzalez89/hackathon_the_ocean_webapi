const ProfileService = require('./../services/profileService');

class ProfileController {   
    static async getList() {
        return await ProfileService.getList();
    }

    static async getById(id) {
        return await ProfileService.getById(id);
    }

    static async create(profile) {
        await ProfileService.create(profile);
    }

    static async update(id, profile) {
        await ProfileService.update(id, profile);
    }

    static async delete(id) {
        await ProfileService.delete(id);
    }
    
}

module.exports = ProfileController;