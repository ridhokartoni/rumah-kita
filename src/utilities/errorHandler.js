const errorHandling = function(message, name, statusCode){
    this.message = message,
    this.name = name
    this.statusCode = statusCode
}

module.exports = errorHandling;