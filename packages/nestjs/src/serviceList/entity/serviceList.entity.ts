import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class ServiceList {
    @PrimaryGeneratedColumn()
    id: string;
    @Column({ unique: true })
    name: string;
    @Column({ unique: true })
    owner: string;
    @Column({ nullable: true })
    description: string;
    @CreateDateColumn({ name: 'created_at' }) 
    'created_at': Date;
}