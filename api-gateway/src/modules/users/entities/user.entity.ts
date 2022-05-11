
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from 'src/modules/shared/entities/base.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('user')
export class User extends BaseEntity{
  @Field(() => Int, { description: 'ID Usuario' })
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Field(() => String, { description: 'NIC Usuario' })
  @Column({ length: 30, nullable: false })
  nic: string;

  @Field(() => String, { description: 'Password Usuario' })
  @Column({ length: 100, nullable: false })
  password: string;
}
