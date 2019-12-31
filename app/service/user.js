'use strice'

const Service = require('egg').Service

class UserService extends Service {
    /**
     * 根据登陆名查找用户
     */
    getUserByLoginName(username) {
        const query = { username };
        console.log(this.ctx.model, 'model');
        return this.ctx.model.User.findOne(query).exec();
    }
}

module.exports = UserService