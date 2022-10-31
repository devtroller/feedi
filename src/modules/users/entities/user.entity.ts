import { Entity, Column, PrimaryGeneratedColumn, Generated } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'character varying',
    name: 'first_name',
    length: 50,
    nullable: false,
  })
  firstName: string;

  @Column({
    type: 'character varying',
    name: 'last_name',
    length: 50,
    nullable: false,
  })
  lastName: string;

  @Column({ type: 'uuid', unique: true })
  @Generated('uuid')
  uuid: string;

  @Column({
    type: 'boolean',
    name: 'is_active',
    default: false,
    nullable: false,
  })
  isActive: boolean;
}
