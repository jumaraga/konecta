
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn,OneToOne } from "typeorm";
import { User } from "src/user/user.model";
import { Image } from "src/images/models/img.model";
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


    @OneToOne((type) => Image, (Image)=>Image.url)
    @JoinColumn({ name: 'img_url' })
    img_url: string;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
}
