const SecurityService = require('./../services/securityService');

class SecurityController {
    static async LogIn(username) {
        return await SecurityService.LogIn(username);
    }
}

module.exports = SecurityController;