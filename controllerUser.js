const { Prisma } = require("@prisma/client")
const prisma = require('./utils/prisma')

const getUsers = async (req, res) => {
    const allUsers = await prisma.user.findMany()
    res.status(201).json({ users: allUsers });
};

module.exports = { getUsers }