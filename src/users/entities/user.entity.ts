import { Entity, Column, PrimaryGeneratedColumn, Generated } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'character varying', length: 50, nullable: false })
  firstName: string;

  @Column({ type: 'character varying', length: 50, nullable: false })
  lastName: string;

  @Column({ type: 'uuid', unique: true })
  @Generated('uuid')
  uuid: string;

  @Column({ type: 'boolean', default: false, nullable: false })
  isActive: boolean;
}
