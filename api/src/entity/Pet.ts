import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn} from "typeorm";

@Entity()
export class Pet {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({comment: '名前', length: 10})
    name!: string;

    @CreateDateColumn({name: 'created_at'})
    createdAt!: Date;
}
