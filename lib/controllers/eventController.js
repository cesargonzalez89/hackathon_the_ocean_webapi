const EventService = require('./../services/eventService');

class EventController {
    static async getList() {
        return await EventService.getList();
    }

    static async getById(id) {
        return await EventService.getById(id);
    }

    static async create(event) {
        await EventService.create(event);
    }

    static async update(id, event) {
        await EventService.update(id, event);
    }

    static async delete(id) {
        await EventService.delete(id);
    }
}

module.exports = EventController;