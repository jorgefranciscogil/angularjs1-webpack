export class MockUserEntity {

    constructor() {
      this.names = ['Kevin', 'Gianfranco', 'Juan Carlos', 'Jorge'];
    }
  
    getName() {
      const totalNames = this.names.length;
      const rand = Math.floor(Math.random() * totalNames);
      return this.names[rand];
    }

}