import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity("user")
export class User {
    
    @PrimaryGeneratedColumn()
    id!: number;

}