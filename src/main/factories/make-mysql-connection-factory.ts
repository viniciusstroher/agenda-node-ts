import {createConnection, Connection, ConnectionOptions} from "typeorm";
import MysqlDatabase from "../../infra/database/mysql-database";
import {Config} from "../../config/app"
import {MysqlConnectionOptions} from "typeorm/driver/mysql/MysqlConnectionOptions";

export const makeMysqlConnection = async (): Promise<Connection> => {
    try{
        const optionsDb:MysqlConnectionOptions = Object.assign(Config.db,{})
        return await createConnection(optionsDb)
    }catch(ex) {
        throw new Error(ex)
    }
}