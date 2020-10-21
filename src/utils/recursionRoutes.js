//根据服务器用户返回的menuList数据和allRoutes进行匹配，得到符合当前用户的有效路由配置

// const { default: allRoutes } = require("../router/allRoutes");
import allRoutes from "../router/allRoutes"

/**
 * 
 * @param {array} allRoutes 用户的有效的完整路由配置
 * @param {array} menuList  服务器返回的用户菜单名字
 */
const recursionRoutes=(allRoutes,menuList)=>{
    let userRoutes=[]
    allRoutes.forEach(item=>{
        menuList.forEach(v=>{
             if(item.meta.name===v.name){
                 if(v.children && Array.isArray(v.children)){
                       item.children=recursionRoutes(item.children,v.children)
                 }
                userRoutes.push(item)
             }
        })
    })
    return userRoutes
}
export default recursionRoutes

// let menuList=[
//     {
//         "name": "管理首页"
//     },
//     {
//         "name": "学员管理",
//         "children": [
//             {
//                 "name": "学员项目管理"
//             }
//         ]
//     },
//     {
//         "name": "我的中心"
//     }
// ]
// console.log(recursionRoutes(allRoutes,menuList));

