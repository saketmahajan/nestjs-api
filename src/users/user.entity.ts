import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: string;
    @Column({ unique: true })
    email: string;
    @Column({ unique: true })
    name: string;
    @Column({ nullable: true })
    team: string;
}