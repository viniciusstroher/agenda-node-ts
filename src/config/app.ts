import {DatabaseType} from "typeorm";
// @ts-ignore
import * as config from '../../ormconfig.json'

const mysqlDatabase: DatabaseType = 'mysql';
export const Config = {
    db:{
        type: mysqlDatabase,
        host: config.host,
        port: config.port,
        username: config.username,
        password: config.password,
        database: config.database,
        synchronize: config.synchronize,
        logging: config.logging,
        entities: config.entities,
    }
}