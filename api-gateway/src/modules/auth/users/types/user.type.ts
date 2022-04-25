import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserType {
  @Field(() => Int, { description: 'ID Usuario' })
  id: number;

  @Field(() => String, { description: 'NIC Usuario' })
  nic: string;

  @Field(() => String, { description: 'Password Usuario' })
  password: string;

  @Field(() => Date, { description: 'Fecha creación' })
  created: Date;

  @Field(() => Date, { description: 'Fecha modificación' })
  updated?: Date;

  @Field(() => Date, { description: 'Fecha eliminación' })
  deletedAt?: Date;
}
