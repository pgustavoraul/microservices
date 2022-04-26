import { Field, Int, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from 'src/modules/shared/entities/base.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('person')
export class Person extends BaseEntity{
  @Field(() => Int, { description: 'Persona ID' })
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Field(() => String, { description: 'Nombres' })
  @Column({ length: 30, nullable: false })
  firstname: string;

  @Field(() => String, { description: 'Apellidos' })
  @Column({ length: 30, nullable: false })
  lastname: string;

  @Field(() => Date, { description: 'Fecha de Nacimiento' })
  @Column({ type: 'date', nullable: true })
  datebird?: Date;

  @Field(() => Int, { description: 'Teléfono 1' })
  @Column({ length: 15, nullable: false })
  phone1: string;

  @Field(() => Int, { description: 'Teléfono 2' })
  @Column({ length: 15, nullable: true })
  phone2?: string;
}
