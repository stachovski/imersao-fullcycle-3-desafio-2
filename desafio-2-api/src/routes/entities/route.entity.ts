import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'routes' })
export class Route {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;
  
  @Column()
  startPosition: string;
  
  @Column()
  endPosition: string;
}
