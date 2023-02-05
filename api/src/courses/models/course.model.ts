
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "src/user/user.model";

@Entity({ name: 'courses' })
export class Course {
    @PrimaryGeneratedColumn()
    id: string;

    @ManyToOne(type => User)
    @JoinColumn({ name: 'author' })
    user: User;

    @Column('text')
    name: string;

    @Column('text')
    description: string;

    @Column('text')
    img_url: string;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
}