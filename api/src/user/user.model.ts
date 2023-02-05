import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne, JoinColumn } from "typeorm";

@Entity({ name: 'users' })
export class User {
  // //@Field(type => ID)
  @PrimaryGeneratedColumn()
  id: string;

  //@Field()
  @Column({ unique: true })
  email: string;
  @Column({ unique: true })
  username: string;

  //@Field()
  @Column()
  firstname?: string;

  //@Field()
  @Column()
  lastname?: string;

  //@Field()

  @Column({ unique: true })
  phoneNumber?: string;

  @Column()
  isAdmin?: boolean;

}
