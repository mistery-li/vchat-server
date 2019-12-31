'use strict'

module.exports = () => {
    // 验证用户是否登陆
    return async function(ctx, next) {
        ctx.locals.current_user = null;

        const { user } = this;
        if(!user) {
            return await next();
        }

        ctx.locals.current_user = user;
        await next();
    }
}