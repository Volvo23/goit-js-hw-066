import users from "./users.js"

// const getUsersWithFriend = (users, friendName) => {
 
// return users.filter(({friends}) => friends.includes(friendName))
// .map(({name}) => name)
// };

// //console.log(getUsersWithFriend(users, 'Marilyn Mcintosh')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Sharron Pace')); // [ 'Elma Head', 'Sheree Anthony' ]

const getUsersWithFriend = (users, friendName) => {
 
    let namesArr = users.reduce((acc, user) => {
    user.friends.includes(friendName) ? acc.push(user.name) : null;
    return acc
     } ,[])
return namesArr
}
    
    //console.log(getUsersWithFriend(users, 'Marilyn Mcintosh')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
    console.log(getUsersWithFriend(users, 'Sharron Pace')); // [ 'Elma Head', 'Sheree Anthony' ]
    