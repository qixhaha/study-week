/**
 * 逻辑层
 */
import svgCaptcha from "svg-captcha";
class PublicController {
  constructor() {}
  async getCapcha(ctx) {
    const newCaptcha = svgCaptcha.create({
      size: 4,
      ignoreChars: "0o1il",
      color: true,
      // 干扰线
      noise: Math.floor(Math.random() * 5),
      width: 150,
      height: 50,
    });
    // console.log(newCaptcha)
    ctx.body = {
      code: 200,
      msg: newCaptcha.data,
    };
  }
}

export default new PublicController();
