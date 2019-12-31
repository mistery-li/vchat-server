'use strict';

const Controller = require('egg').Controller;
const ctypto = require('crypto');
class UserController extends Controller {
    async login() {
        const { ctx } = this;

        const username = ctx.params.username;
        console.log(this.ctx.model, 'server')
        const user = ctx.service.user.getUserByLoginName(username);

        if(!user) {
            ctx.status = 404;
            ctx.body = {
                success: false,
                error_msg: '用户不存在！'
            }
            return;
        }
        
        const userId = user._id;
        const sign = Date.now() + userId;
        const token = ctypto.createHash("md5").update(sign).digest('hex');
        ctx.body = {
            success: true,
            data: {
                token
            }
        }
    }
}

module.exports = UserController;