const User = require('../model/User');
const bcrypt = require('bcrypt');

const handleNewUser = async (req, res) => {
    const { user, pwd, roles, organization, isActive } = req.body;

    try {
        // Check if the user making the request is a super admin
        const requestingUser = req.user; // Assuming you have middleware to extract the user from the request
        //if (requestingUser && requestingUser.roles && requestingUser.roles.SuperAdmin) {
            // The user making the request is a super admin

            // check for duplicate usernames in the db
            const duplicate = await User.findOne({ username: user }).exec();
           // if (duplicate) return res.sendStatus(409); // Conflict 

            // encrypt the password
            const hashedPwd = await bcrypt.hash(pwd, 10);

            // create and store the new user
            const result = await User.create({
                "username": user,
                "password": hashedPwd,
                "roles": roles,
                "organization" : organization,
                "isActive": isActive
            });

            console.log(result);

            res.status(201).json({ 'success': `New user ${user} created!` });
        //} else {
            // The user making the request is not a super admin
            //console.log('Registration failed. Insufficient privileges.');
            //res.status(403).json({ error: 'Insufficient privileges' });
       // }
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = { handleNewUser };
