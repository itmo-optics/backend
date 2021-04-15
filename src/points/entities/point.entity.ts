import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Point {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  description: string
}
