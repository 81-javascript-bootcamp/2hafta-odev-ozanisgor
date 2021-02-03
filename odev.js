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
  const regex = /([a-zA-Z]{3,}\s*)+/;

  if (typeof name != "string") {
    return false;
  } else if (name == "") {
    console.log("Name must be filled out");
    return false;
  } else if (!regex.test(name)) {
    console.log("Name must be at least 3 alphanumeric characters");
    return false;
    //Sir, I am not %100 sure using "!" is the most reliable way on line 51 to make it false. The regex that i created is covering all the expectations. So inside of the paranthesis become true but in fact we need the results besides that regex matches. To make it work I added "!" on line 51 just before the regex. With this way all the tests return true but I am still not comfortable with "!". That would be great to have a comment from you about this case sir.
  }
  return true;
}

console.log(isValidName("Ahmet") === true);
console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName("") === false);
console.log(isValidName("  \t\n") === false);
console.log(isValidName("X") === false);

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
