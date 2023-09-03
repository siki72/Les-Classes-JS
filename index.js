/////////////////////////////////////
//////// LES CLASSES EN JAVASCRIPT //
/////////////////////////////////////

class Computer {
  #passWord = "je suis le mot de passe";
  static numberOfComputersCreated = 0;
  constructor(type, role) {
    this.type = type;
    this.role = role;
    Computer.numberOfComputersCreated++;
  }

  turnOn() {
    console.log(`L'ordinateur de type ${this.type} viens de s'allumer`);
  }
  turnOff() {
    console.log(`L'ordinateur de type ${this.type} vas s'eteindre`);
  }

  // setter & getter

  get getPassword() {
    if (this.role === "admin") {
      return console.log(`voici le mot de passe : ${this.#passWord}`);
    } else {
      return console.log(`Accès refusé : vous n'êtes pas un administrateur.`);
    }
  }

  set setNewPassword(password) {
    if (this.role === "admin") {
      this.#passWord = password;
    } else {
      return console.log("Vous n'êtes pas connecté en tant qu'administrateur");
    }
  }
}

class Macbook extends Computer {
  constructor(type, role, marque) {
    super(type, role);
    this.marque = marque;
  }
  turnOn() {
    super.turnOn();
    console.log(
      `L'ordinateur de type ${this.type}  et de marque ${this.marque} viens de s'allumer`
    );
  }
}

const laptop = new Computer("portable", "admin");
const macBookAir = new Macbook("portable", "visiteur", "apple");
console.log(laptop);
console.log(macBookAir);
macBookAir.turnOn();
