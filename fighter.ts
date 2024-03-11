import { characters } from './charactersmain';

class king extends characters {
  weapon: string;
  skill: number;

  constructor(
    name: string,
    family: string,
    edad: number,
    weapon: string,
    skill: number
  ) {
    super(name, family, age);
    this.weapon = weapon;
    this.skill = skill;
  }

  comunicate(): string {
    return 'Primero pego y luego pregunto';
  }
}
