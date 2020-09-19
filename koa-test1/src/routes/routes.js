import combineRoutes from 'koa-combine-routers';
// import aroutes from './aRouter'
// import broutes  from  './bRouter'
import demoRouter from './demoRouter'
import PublicRouter from './PublicRouter'

export default combineRoutes(
    // aroutes,
    // broutes
    PublicRouter
    // demoRouter
)
// module.exports = combineRoutes(
//     aroutes,
//     broutes
// )