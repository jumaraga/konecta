import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne, JoinColumn } from "typeorm";

@Entity({ name: 'users' })
export class User {
  // //@Field(type => ID)
  @PrimaryGeneratedColumn()
  id: string;

  //@Field()
  @Column({ unique: true })
  email: string;

  //@Field()
  @Column()
  firstName?: string;

  //@Field()
  @Column()
  lastName?: string;

  //@Field()
  
  @Column({ unique: true })
  phoneNumber?: string;

  @Column()
  isAdmin?: boolean;
  
}
