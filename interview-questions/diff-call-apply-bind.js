// Call: The call() method invokes a function with a given this value and arguments provided one by one

var square = function(){
  return this.number ** 2;
}

var first = {
  number: 2
};
var second = {
  number: 3
};

var res = square.call(first);
var res1 = square.call(second);

console.log(res, res1);

// Apply: Invokes the function with a given this value and allows you to pass in arguments as an array
var employee1 = {firstName: 'John', lastName: 'Rodson'};
var employee2 = {firstName: 'Jimmy', lastName: 'Baily'};

function invite(greeting1, greeting2) {
    console.log(greeting1 + ' ' + this.firstName + ' ' + this.lastName+ ', '+ greeting2);
}

invite.apply(employee1, ['Hello', 'How are you?']); // Hello John Rodson, How are you?
invite.apply(employee2, ['Hello', 'How are you?']); // Hello Jimmy Baily, How are you?


// bind: returns a new function, allowing you to pass any number of arguments

var inviteEmployee1 = invite.bind(employee1);
var inviteEmployee2 = invite.bind(employee2);
inviteEmployee1('Hello', 'How are you?'); // Hello John Rodson, How are you?
inviteEmployee2('Hello', 'How are you?'); // Hello Jimmy Baily, How are you?