function Language(name, created, satisfaction) {
  this.name = name;
  this.created = created;
  this.satisfaction = satisfaction;
}

Language.prototype.intro = function() {
  return `This programming language is ${this.name}, and created at ${this.created}, and ${this.satisfaction}.`
}

function LanguagePlus(name, created, version, satisfaction) {
  Language.call(this, name, created, satisfaction);
  this.version = version;
}

// LanguagePlus.prototype.__proto__ = Language.prototype; // 비표준
LanguagePlus.prototype = Object.create(Language.prototype); // LanguagePlus.prototype 의 constructor 를 Language 로 지정
LanguagePlus.prototype.constructor = LanguagePlus;

LanguagePlus.prototype.newIntro = function() {
  return `This programming language is ${this.name}, and created at ${this.created}, and version is ${this.version}, and ${this.satisfaction}.`
}

const Java = new LanguagePlus('Java', '1996.1.23', '14.0.2', 'not funny');
console.log('intro:', Java.intro());
console.log('newIntro:', Java.newIntro());
console.log('constructor:', Java.constructor);
