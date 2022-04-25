import { Column, BeforeUpdate, BeforeInsert, DeleteDateColumn } from 'typeorm';

export class BaseEntity {
  @Column({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'updated_at', default: new Date() })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at'})
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
