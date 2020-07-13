import Database from '../../interfaces/database/database.js'

import { createConnection } from 'typeorm';
import {Connection} from "typeorm/connection/Connection";

export default class MysqlDatabase implements Database {
    private db:Connection

    constructor(db:Connection)
    {
        if(!db){
            throw new Error('Provide the database object.')
        }
        this.db = db
    }


    connect()
    {
        throw new Error('not implemented.')
    }

    close()
    {
        this.getConnection().close()
    }

    getConnection()
    {
        return this.db
    }
}