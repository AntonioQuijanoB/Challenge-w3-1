class Square extends Characters {
  characterserve: Luchador;
  gradeserve: number;

  constructor(
    name: string,
    family: string,
    age: number,
    characterserve: Luchador,
    gradeserve: number
  ) {
    super(name, family, age);
    this.characterserve = characterserve;
    this.gradeserve = gradeserve;
  }

  comunicate(): string {
    return 'Soy un loser';
  }
}
