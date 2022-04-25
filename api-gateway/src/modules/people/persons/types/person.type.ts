import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PersonType {
  @Field(() => Int, { description: 'Persona ID' })
  id: number;

  @Field(() => String, { description: 'Nombres' })
  firstname: string;

  @Field(() => String, { description: 'Apellidos' })
  lastname: string;

  @Field(() => Date, { description: 'Fecha de Nacimiento' })
  datebird?: Date;

  @Field(() => Int, { description: 'Teléfono 1' })
  phone1: string;

  @Field(() => Int, { description: 'Teléfono 2' })
  phone2?: string;

  @Field(() => Date, { description: 'Fecha creación' })
  created!: Date;

  @Field(() => Date, { description: 'Fecha Modificación' })
  updated!: Date;

  @Field(() => Date, { description: 'Fecha Eliminación' })
  deletedAt?: Date;
}
