const User = require('../models/userModel.js');


async function createUser(params) {
    const { firstName, lastName, email, passwordHash } = params;
    
    //console.log(firstName, lastName, email, passwordHash);
    try {
        const user = await User.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            passwordHash: passwordHash
        });
        console.log(user)
        return user;
    } catch (error) {
        throw error;
    }
}

async function findUserByEmail(email) {
    try {
        const user = await User.findOne({ where: { email } });
        return user;
    } catch (error) {
        throw error;
    }
}

async function findUserById(userID) {
    try {
        const user = await User.findOne({ where: { userID } });
        return user;
    } catch (error) {
        throw error;
    }
}

module.exports = {createUser, findUserByEmail, findUserById}