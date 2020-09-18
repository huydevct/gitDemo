function Cat(name){
    this.name = name;
    this.stomach = [];
}

Cat.prototype.eat = function(stomach){
    this.stomach = stomach;
}
module.exports = Cat;