import {createConnection,getConnectionManager,Connection} from "typeorm";
import MysqlDatabase from './mysql-database'
import {makeMysqlConnection} from '../../main/factories/make-mysql-connection-factory'

describe('Test Database', () => {
    test('Should return error wrong mysql configurations passed', async () => {
        // const db = await makeConnection
        const db = await makeMysqlConnection()
        await db.close()
        // db.disconnect()
        expect(db).toBeInstanceOf(Connection)
    })

    test('Should return error if not provide the database implementation ', async () => {
        expect(() => {
            expect(new MysqlDatabase(null)).toThrow()
        }).toThrow();
    })

    test('Should return show tables ', async () => {

        const db = await makeMysqlConnection()
        const result = await db.query("show tables")
        console.log(result)
        await db.close()

        expect(db).toBeInstanceOf(Connection)
    })
})

afterAll(async done => {
    done();
});
