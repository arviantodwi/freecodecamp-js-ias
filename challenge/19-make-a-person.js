// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/make-a-person

var Person = function(firstAndLast) {
  let _fullName = firstAndLast;

  this.getFirstName = () => {
    return _fullName.split(' ')[0]
  };
  this.getLastName = () => {
    return _fullName.split(' ')[1]
  };
  this.getFullName = () => {
    return _fullName;
  };
  this.setFirstName = (fname) => {
    _fullName = fname
      .concat(' ')
      .concat(_fullName.split(' ')[1]);
  };
  this.setLastName = (lname) => {
    _fullName = _fullName.split(' ')[0]
      .concat(' ')
      .concat(lname);
  };
  this.setFullName = (fullName) => {
    _fullName = fullName;
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();
