import {makeMysqlConnection} from './main/factories/make-mysql-connection-factory'
(async() => {
    const connMysql = await makeMysqlConnection()
    // console.log(connMysql)
})()
