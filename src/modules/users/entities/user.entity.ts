import { AbstractEntity } from 'src/modules/common/abstract.entity';
import { Entity, Column } from 'typeorm';

@Entity({ name: 'users' })
export class User extends AbstractEntity {
  @Column({
    type: 'character varying',
    name: 'first_name',
    length: 50,
    nullable: false,
  })
  firstName: string;

  @Column({
    type: 'character varying',
    name: 'testeane',
    length: 50,
    nullable: false,
    default: 'hello',
  })
  testeane: string;

  @Column({
    type: 'character varying',
    name: 'last_name',
    length: 50,
    nullable: false,
  })
  lastName: string;

  @Column({
    type: 'boolean',
    name: 'is_active',
    default: false,
    nullable: false,
  })
  isActive: boolean;
}
