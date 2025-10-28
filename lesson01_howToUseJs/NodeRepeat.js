function Classed(){
    this.name = "hello world!!!!!";
    this.message;
}

Classed.prototype.setMessage = function(msg){
    this.message = msg;
}

Classed.prototype.getMessage = function() {
    return this.message;
}

module.exports = Classed;