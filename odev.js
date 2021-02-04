/** 

1. mycarDetails fonksiyonunu "GA12345 Toyota" ciktisini verecek sekilde duzenleyin.

**/

//Solution with bind()*
var car = {
  registrationNumber: "GA12345",
  brand: "Toyota",

  displayDetails: function () {
    console.log(this.registrationNumber + " " + this.brand);
  },
};

var myCarDetails = car.displayDetails.bind(car);
myCarDetails();

//Solution with call()/apply()*
var car = {
  registrationNumber: "GA12345",
  brand: "Toyota",

  displayDetails: function () {
    console.log(this.registrationNumber + " " + this.brand);
  },
};

car.displayDetails.call(car);

/** 

2.name parametresi alan bir isValidName fonksiyonu yazin. 
Fonksiyon asagidaki kosullarin hepsi saglaniyorsa true, saglanmiyorsa false donmelidir:

name string olmali
name bos olmamali
bosluk icerebilir, ancak bosluk haridcindeki isimler en az 2 karakterden olusmali.

**/

function isValidName(name) {

  // I've changed the regex because it was still match even if the 3rd name was less then 3 characters. Also created a new variable called regexResult to store pattern and according to new variable I changed logic for the last 'else if' statement. Now pattern matches more then 2 words with at least 2 characters.

  const regex = /^([a-zA-Z]{2,}\s*)+$/;
  const regexResult = regex.test(name);

  if (typeof name != "string") {
    return false;
  } else if (name == "") {
    console.log("Name must be filled out");
    return false;
  } else if (regexResult === false) {
    console.log("Name must be compose of at least 2 alphabetic characters");
    return false;
  }
  return true;
}


/**


3. summary fonkisyonunu ciktisi "Brave New World was written by Aldous Huxley. It is a dystopian novel written in 1932." olacak sekilde cagirin.

**/

//Solution with call()/apply()*
const book = {
  title: "Brave New World",
  author: "Aldous Huxley",
};

function summary(genre, year) {
  console.log(
    `${this.title} was written by ${this.author}. It is a ${genre} novel written in ${year}.`
  );
}

summary.call(book, "dystopian", 1932);

//Solution with bind()*
const book = {
  title: "Brave New World",
  author: "Aldous Huxley",
};

function summary(genre, year) {
  console.log(
    `${this.title} was written by ${this.author}. It is a ${genre} novel written in ${year}.`
  );
}

const bookSummary = summary.bind(book);
bookSummary("dystopian", 1932);
