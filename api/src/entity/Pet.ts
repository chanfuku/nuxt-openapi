import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Pet {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column({type: 'varchar', length: 255, nullable: true})
    tag?: string;
}
