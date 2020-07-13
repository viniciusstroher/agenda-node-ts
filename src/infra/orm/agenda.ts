import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";
import {Moment} from "moment";

@Entity()
export class Agenda extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    startDate: Date;

    @Column()
    endDate: Date;
}