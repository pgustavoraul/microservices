
import { BaseEntity } from 'src/modules/shared/entities/base.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserEntity extends BaseEntity{
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ length: 30, nullable: false })
  nic: string;

  @Column({ length: 100, nullable: false })
  password: string;
}
