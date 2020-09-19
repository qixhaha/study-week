/**
 * 逻辑层
 */
import svgCaptcha from 'svg-captcha'
class PublicController {
    constructor() { }
    async getCapcha(ctx) {
        const newCaptcha = svgCaptcha.create({})
        // console.log(newCaptcha)
        ctx.body = {
            code: 200,
            msg: newCaptcha.data
        }
    }
}

export default new PublicController()