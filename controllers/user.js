const { Prisma } = require("@prisma/client")
const prisma = require('../utils/prisma')

const getAllUsers = async (req, res) => {
    res.send('If you can see this, it worked')
};

module.exports = { getAllUsers }