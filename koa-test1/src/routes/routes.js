import combineRoutes from 'koa-combine-routers';
// import aroutes from './aRouter'
// import broutes  from  './bRouter'
import demoRouter  from  './demoRouter'

export default combineRoutes(
    // aroutes,
    // broutes
    demoRouter
)
// module.exports = combineRoutes(
//     aroutes,
//     broutes
// )