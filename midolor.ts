class Engineer {
  private name: string;
  private age: number;
  private title: string;
  private experience: number;

  constructor(name: string, age: number, title: string, experience: number) {
    this.name = name;
    this.age = age;
    this.title = title;
    this.experience = experience;
  }

  // Getter methods to safely access the properties
  getName(): string {
    return this.name;
  }

  getAge(): number {
    return this.age;
  }

  getTitle(): string {
    return this.title;
  }

  getExperience(): number {
    return this.experience;
  }

  // Method to display engineer's details
  displayInfo(): string {
    return `Engineer Name: ${this.name}, Age: ${this.age}, Title: ${this.title}, Experience: ${this.experience} years`;
  }
}

// Creating an instance of Engineer
const SadikEngeer = new Engineer("Sadik", 25, "Std Engeer", 2);

// Displaying the engineer's details
console.log(SadikEngeer.displayInfo());
