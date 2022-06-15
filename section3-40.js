const friends = ['Michael', 'Steven', 'Peter'];

//add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// remove elements
friends.pop(); //Last element
friends.pop(); //Last element
console.log(friends);

friends.shift(); //first
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
  console.log('you have a froend called Steven');
}
