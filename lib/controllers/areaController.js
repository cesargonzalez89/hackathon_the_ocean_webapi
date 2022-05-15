const AreaService = require('./../services/areaService');

class AreaController {
    static async getList() {
        return await AreaService.getList();
    }

    static async getById(id) {
        return await AreaService.getById(id);
    }

    static async create(area) {
        await AreaService.create(area);
    }

    static async update(id, area) {
        await AreaService.update(id, area);
    }

    static async delete(id) {
        await AreaService.delete(id);
    }
}

module.exports = AreaController;