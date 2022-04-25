import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('person')
export class Person {
  @PrimaryGeneratedColumn('increment', { name: 'ID' })
  id: number;

  @Column({ name: 'firstname', type: 'varchar2', length: 30, nullable: false })
  firstname: string;

  @Column({ name: 'lastname', type: 'varchar2', length: 30, nullable: false })
  lastname: string;

  @Column({ name: 'datebird', type: 'date', nullable: true })
  datebird?: Date;

  @Column({ name: 'phone1', type: 'varchar2', length: 15, nullable: false })
  phone1: string;

  @Column({ name: 'phone1', type: 'varchar2', length: 15, nullable: true })
  phone2?: string;

  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn()
  updated!: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
