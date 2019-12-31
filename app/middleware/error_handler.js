'use strict'

/**
 * 错误捕获
 */
module.exports = (options, app) => {
    return async function(ctx, next) {
        try {
            await next();
        } catch (err) {
            app.emit('error', err, this);
            const status = err.status || 500;

            const error_msg = status === 500 && app.config.env === 'prod'
                ? 'Internal Server Error'
                : err.message
            console.log(err.message, 'err');
            ctx.body = { error_msg }
            ctx.body.success = false;
            if(status === 422) {
                ctx.body.detail = err.errors;
            }
            ctx.status = status;
        }
    }
}