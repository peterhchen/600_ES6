"use strict";
var employee = {
    id: 1,
    greet: function () {
        console.log('this.id: ', this.id);
    }
};
employee.greet();
// assume we want to display ID after one second.
var employee1 = {
    id: 1,
    greet: function () {
        var self = this;
        // function need self reference for function
        setTimeout(function () {
            console.log('self.id: ', self.id);
        }, 1000);
    }
};
employee1.greet();
// change to arrow function
var employee2 = {
    id: 1,
    greet: function () {
        var _this = this;
        setTimeout(function () {
            console.log('arrow function this.id: ', _this.id);
        }, 1000);
    }
};
employee2.greet();
//# sourceMappingURL=11_this_keyword.js.map