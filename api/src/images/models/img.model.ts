import { User } from "src/user/user.model";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity('images')
export class Image {
    @PrimaryColumn()
    url: string;

    @Column()
    type:string;

    @ManyToOne((type)=>User)
    @JoinColumn({name:'user_id'})
    user_id:number

    @CreateDateColumn()
    createdAt: Date
}