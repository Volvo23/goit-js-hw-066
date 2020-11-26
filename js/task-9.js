import users from "./users.js"


const getNamesSortedByFriendsCount = users => {
  return [...users]
  .sort(({friends: friends_1},{friends: friends_2}) => 
  {return friends_1.length-friends_2.length})
  .map(({name}) => name)
}

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 
//'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 
//'Ross Vazquez' ]


//const numbers = [1,1000,11,2,24,0,3,30];
//numbers.sort((a,b) => {return a-b})
//numbers.sort((a,b) => {return b-a})
//console.log(numbers);

