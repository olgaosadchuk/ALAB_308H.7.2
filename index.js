// class Governor {
//   static state = "Washington state";
//   static currentTerm = 2;

//   static getTermLength() {
//     return 4;
//   }

//   static announcePolicy(policy) {
//     console.log(`Governor of ${this.state} announces new policy: ${policy}`);
//   }
// }

// console.log(Governor.state);
// console.log(Governor.currentTerm); 
// console.log(Governor.getTermLength()); 
// Governor.announcePolicy("Free school lunch in the schools!");

console.log(" ");

// class Person {
//     constructor(name, age, gender) {
//       this.name = name;
//       this.age = age;
//       this.gender = gender;
//     }
  
//     introduce() {
//       console.log(`Hi, my name is ${this.name}. I am ${this.age} years old.`);
//     }
  
//     greet(person) {
//       console.log(`Hi ${person.name}, nice to meet you!`);
//     }
  
//     eat() {
//       console.log(`${this.name} is eating.`);
//     }
//   }
  
//   class PostalWorker extends Person {
//     constructor(name, age, gender, employeeId) {
//       super(name, age, gender);
//       this.employeeId = employeeId;
//     }
  
//     deliverMail(address) {
//       console.log(`${this.name} (${this.employeeId}) is delivering mail to ${address}.`);
//     }
  
//     sortMail() {
//       console.log(`${this.name} (${this.employeeId}) is sorting mail.`);
//     }
//   }
  
//   class Chef extends Person {
//     constructor(name, age, gender, speciality) {
//       super(name, age, gender);
//       this.speciality = speciality;
//     }
  
//     cook(dish) {
//       console.log(`${this.name} is cooking ${dish}.`);
//     }
  
//     tasteFood() {
//       console.log(`${this.name} is tasting the food.`);
//     }
//   }
  
//   const postalWorker1 = new PostalWorker("Bob Smith", 31, "Male", "PW0010");
//   const postalWorker2 = new PostalWorker("Marica Johnson", 28, "Female", "PW0020");
  
//   const chef1 = new Chef("Richi Gir", 35, "Male", "Italian cuisine");
//   const chef2 = new Chef("Katie Parles", 41, "Female", "French cuisine");
  
//   postalWorker1.introduce(); 
//   postalWorker1.deliverMail("11025 NorthUp Way, Bellevue, WA"); 
//   postalWorker2.sortMail(); 
  
//   chef1.greet(postalWorker2); 
//   chef1.cook("Pizza"); 
//   chef2.tasteFood(); 

  console.log(" ");

  class BankAccount {
    static nextAcctNum = 1;
  
    constructor(ownerName, balance) {
      this.ownerName = ownerName;
      this.balance = balance;
      this.acctNum = BankAccount.nextAcctNum;
      BankAccount.nextAcctNum++;
    }
  
    deposit(amount) {
      this.balance += amount;
      console.log(`Deposited ${amount} into account ${this.acctNum}. New balance: ${this.balance}`);
    }
  
    withdraw(amount) {
      if (this.balance >= amount) {
        this.balance -= amount;
        console.log(`Withdrawn ${amount} from account ${this.acctNum}. New balance: ${this.balance}`);
      } else {
        console.log(`Insufficient funds to withdraw ${amount} from account ${this.acctNum}.`);
      }
    }
  }
  
  class CheckingAccount extends BankAccount {
    constructor(ownerName, balance, overdraftEnabled) {
      super(ownerName, balance);
      this.overdraftEnabled = overdraftEnabled;
    }
  
    withdraw(amount) {
      if (this.balance >= amount || this.overdraftEnabled) {
        this.balance -= amount;
        console.log(`Withdrawn ${amount} from account ${this.acctNum}. New balance: ${this.balance}`);
      } else {
        console.log(`Insufficient funds to withdraw ${amount} from account ${this.acctNum}.`);
      }
    }
  }
  
  class SavingsAccount extends BankAccount {
    withdraw(amount) {
      console.log(`Withdrawals are not allowed from a savings account.`);
    }
  }  

