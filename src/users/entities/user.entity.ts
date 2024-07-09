import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  surname: string;

  @Column({ nullable: false })
  firstName: string;

  @Column({ nullable: false })
  middleName: string;

  @Column('int', { nullable: false })
  result: number;

  @Column({ nullable: false })
  date: Date;
}
