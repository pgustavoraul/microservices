import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@ObjectType()
@Entity('public.user')
export class User {
  @PrimaryGeneratedColumn('increment', { name: 'ID' })
  id: number;

  @Field(() => String, { description: 'NIC Usuario' })
  @Column({ name: 'nic', type: 'varchar2', length: 30, nullable: false })
  nic:string;

  @Field(() => String, { description: 'Password Usuario' })
  @Column({ name: 'password', type: 'varchar2', length: 100, nullable: false })
  password:string;

  @CreateDateColumn() 
  created!: Date;

  @UpdateDateColumn() 
  updated!: Date;

  @DeleteDateColumn()  
  deletedAt?: Date;

  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;


}
