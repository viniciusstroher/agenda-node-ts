import {Agenda} from '../orm/agenda'
import {Connection,Repository as RepositoryORM} from "typeorm";
import {makeMysqlConnection} from "../../main/factories/make-mysql-connection-factory";
import * as moment from 'moment';
import {Repository} from "../../interfaces/repository/repository";

class AgendaRepository implements Repository<Agenda>{
    agendaRepo:RepositoryORM<Agenda>
    constructor(agendaRepo:RepositoryORM<Agenda>) {
        this.agendaRepo  = agendaRepo
    }

    delete(t: Agenda): Promise<any> {
        return undefined;
    }

    exists(t: Agenda): Promise<boolean> {
        return undefined;
    }

    async save(t: Agenda): Promise<any> {
        return await t.save();
    }

    findById(id: number): Promise<any> {
        return undefined;
    }

}

describe('Test Agenda Repo', () => {
    // test('Should return success if insert and find contact', async () => {
        const agendaORM = new Agenda()
        const agendaRepo = new AgendaRepository(agendaORM)
        // const connectionDb:Connection = await makeMysqlConnection()
        const agendaTypeOrmRepo:RepositoryORM<Agenda> = connectionDb.getRepository(Agenda)
        const agendaRepository:AgendaRepository = new AgendaRepository(agendaTypeOrmRepo)

        const agendaObj = new Agenda()
        agendaObj.name = 'NEW EVENT'
        agendaObj.startDate = moment().toDate()

        const returnSave = await agendaRepository.save(agendaObj)
        console.log(returnSave)
        // const db = await makeConnection
        // const db = await makeMysqlConnection()
        // await db.close()
        // // db.disconnect()
        // expect(db).toBeInstanceOf(Connection)

    })
})