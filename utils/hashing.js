const bcrypt = require('bcryptjs');

const hashPassword = async function (password) {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
};

const hashPasswordAndProceed = async function (next) {
    if (!this.isModified('password')) {
        return next();
    }

    try {
        const hashedPassword = await hashPassword(this.password);
        this.password = hashedPassword;
        next();
    } catch (error) {
        return next(error);
    }
};

module.exports = hashPasswordAndProceed;