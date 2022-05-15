const ContributionService = require('./../services/contributionService');

class ContributionController {
    static async getList() {
        return await ContributionService.getList();
    }

    static async getById(id) {
        return await ContributionService.getById(id);
    }

    static async create(contribution) {
        await ContributionService.create(contribution);
    }

    static async update(id, contribution) {
        await ContributionService.update(id, contribution);
    }

    static async delete(id) {
        await ContributionService.delete(id);
    }
}

module.exports = ContributionController;