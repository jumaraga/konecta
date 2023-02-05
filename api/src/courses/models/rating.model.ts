
// import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
// import { User } from "src/user/user.model";

// @Entity({ name: 'courses' })
// export class Course {
//     @PrimaryGeneratedColumn()
//     id: string;

//     @ManyToMany(type => User)
//     @JoinColumn({ name: 'user_id' })
//     user: User;

//     @OneToOne(type=> Course)
//     @JoinColumn({name:'course_id'})
//     course:Course

//     @Column()
//     @CreateDateColumn()
//     createdAt: Date;

//     @Column()
//     @UpdateDateColumn()
//     updatedAt: Date;
// }