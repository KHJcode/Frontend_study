const userObj = {
  name: 'KHJcode',
  first: 50,
  second: 50,
  getInfo: function() {
    console.log(this);
    return `Username is ${this.name}. Score is ${this.first + this.second}. `
  },
};

console.log('user:', userObj.getInfo());
