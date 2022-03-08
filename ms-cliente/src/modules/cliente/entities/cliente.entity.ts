import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";
@Entity('cliente')
export class Cliente {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'varchar', length: 150 })
    name: string;
}
