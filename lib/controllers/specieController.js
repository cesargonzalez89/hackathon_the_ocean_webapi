const SpecieService = require('./../services/specieService');

class SpecieController {
    static async getList() {
        return await SpecieService.getList();
    }

    static async getById(id) {
        return await SpecieService.getById(id);
    }

    static async create(specie) {
        await SpecieService.create(specie);
    }

    static async update(id, specie) {
        await SpecieService.update(id, specie);
    }

    static async delete(id) {
        await SpecieService.delete(id);
    }
}

module.exports = SpecieController;