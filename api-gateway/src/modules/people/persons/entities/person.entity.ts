import { BaseEntity } from 'src/modules/shared/entities/base.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('person')
export class PersonEntity extends BaseEntity{
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ length: 30, nullable: false })
  firstname: string;

  @Column({ length: 30, nullable: false })
  lastname: string;

  @Column({ type: 'date', nullable: true })
  datebird?: Date;

  @Column({ length: 15, nullable: false })
  phone1: string;

  @Column({ length: 15, nullable: true })
  phone2?: string;
}
