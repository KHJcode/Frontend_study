var kim = {
    name:'kim',
    first: 10,
    second: 20,
    sum: function() {
        return this.first + this.second;
    }
}

console.log(kim.sum());