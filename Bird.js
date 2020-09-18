function Bird(){
    this.stomach = [];
}

Bird.prototype.eat = function(mouse){
    this.stomach.push(mouse);
}