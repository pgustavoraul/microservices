import { Field, ObjectType } from '@nestjs/graphql';
import { Column, BeforeUpdate, BeforeInsert, DeleteDateColumn } from 'typeorm';

@ObjectType()
export class BaseEntity {
  @Field(() => Date, { description: 'Fecha creación' })
  @Column({ name: 'created_at' })
  createdAt: Date;

  @Field(() => Date, { description: 'Fecha Modificación' })
  @Column({ name: 'updated_at', default: new Date() })
  updatedAt: Date;

  @Field(() => Date, { description: 'Fecha Eliminación' })
  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt?: Date;

  @BeforeUpdate()
  updateUpdatedAt() {
    this.updatedAt = new Date();
  }

  @BeforeInsert()
  updateCreatedAt() {
    this.createdAt = new Date();
  }
}
