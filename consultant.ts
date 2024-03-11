import { characters } from './main.ts';

class consultant extends characters {
  characterconsultant: characters;

  constructor(
    name: string,
    family: string,
    age: number,
    characterconsultant: Personaje
  ) {
    super(name, family, age);
    this.characterconsultant = characterconsultant;
  }

  comunicate(): string {
    return 'No sé por qué, pero creo que voy a morir pronto';
  }
}
