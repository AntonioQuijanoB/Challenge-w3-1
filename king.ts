import { characters } from './charactersmain';

class king extends characters {
  yearsofreign: number;

  constructor(name: string, family: string, age: number, yearsofreign: number) {
    super(name, family, age);
    this.yearsofreign = yearsofreign;
  }

  comunicate(): string {
    return 'Vais a morir todos';
  }
}
