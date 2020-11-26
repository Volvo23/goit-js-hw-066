import users from "./users.js"


// const getInactiveUsers = (users)  => users.filter(({isActive}) => !isActive );

const getInactiveUsers = (users) => { 
    let result = users.reduce((acc, user) => {
        if (!user.isActive) {
           
            acc.push(user)
       }
        return acc;
   }, [])
    return result;
};


console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]