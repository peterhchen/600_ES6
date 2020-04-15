var employee = { // an variable employee is an object
    id: 1,       // property is id: 1
    greet: function() { // another property is a function body
        console.log ('this.id: ', this.id)
    }      
}
employee.greet()

// assume we want to display ID after one second.
var employee1 = { // an variable employee is an object
    id: 1,       // property is id: 1
    greet: function() { // another property is a function body
        var self = this 
        // function need self reference for function
        setTimeout (
            function (){
                console.log ('self.id: ', self.id)
            }, 
        1000)
    }      
}
employee1.greet()

// change to arrow function
var employee2 = { // an variable employee is an object
    id: 1,       // property is id: 1
    greet: function() { // another property is a function body
        setTimeout (
            () => {
                console.log ('arrow function this.id: ', this.id)
            }, 
        1000)
    }      
}
employee2.greet()