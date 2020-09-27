class Book {
  constructor(title, date, author) {
    this.title = title;
    this.date = date;
    this.author = author;
  }

  getTitle() { return this.title; }

  getDate() { return this.date; }

  getAuthor() { return this.author; }
}

const pinocchio = new Book('피노키오', 1883, '카를로 콜로디');
pinocchio.intro = function() {
  return `This book title is ${this.getTitle()} and created at ${this.getDate()} and author is ${this.getAuthor()}.`;
}

const TomTravel = Object.create(pinocchio);
TomTravel.title = '톰 소여의 모험';
TomTravel.date = 1876;
TomTravel.author = '마크 트웨인';

console.log('pinocchio:', pinocchio.intro());
console.log('TomTravelL', TomTravel.intro());
