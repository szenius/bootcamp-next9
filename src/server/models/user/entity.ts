import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export interface IUser {
    name: string;
}

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'text'})
    name: string;
}