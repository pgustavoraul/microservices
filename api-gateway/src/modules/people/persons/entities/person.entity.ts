import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@ObjectType()
@Entity('public.person')
export class Person {
  @PrimaryGeneratedColumn('increment', { name: 'ID' })
  id: number;

  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;

  @Field(() => String, { description: 'Nombres' })
  @Column({ name: 'firstname', type: 'varchar2', length: 30, nullable: false })
  firstname: string;

  @Field(() => String, { description: 'Apellidos' })
  @Column({ name: 'lastname', type: 'varchar2', length: 30, nullable: false })
  lastname: string;

  @Field(() => Date, { description: 'Fecha de Nacimiento' })
  @Column({ name: 'datebird', type: 'date', nullable: true })
  datebird?: Date;

  @Field(() => Int, { description: 'Teléfono 1' })
  @Column({ name: 'phone1', type: 'varchar2', length: 15, nullable: false })
  phone1: string;

  @Field(() => Int, { description: 'Teléfono 2' })
  @Column({ name: 'phone1', type: 'varchar2', length: 15, nullable: true })
  phone2?: string;

  @CreateDateColumn() 
  created!: Date;

  @UpdateDateColumn() 
  updated!: Date;

  @DeleteDateColumn()  
  deletedAt?: Date;
}
