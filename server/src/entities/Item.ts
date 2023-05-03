import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity("item")
export class Item {
    
    @PrimaryGeneratedColumn()
    id!: number;

}