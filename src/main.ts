export class characters {
  name: String;
  family: String;
  age: Number;
  lifeordeath: String;

  constructor(name: string, family: string, age: number, lifeordeath: boolean) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.lifeordeath = 'vivo';
  }

  communicate(): string {
    return '';
  }

  morir(): void {
    this.lifeordeath = 'muerto';
  }
}
