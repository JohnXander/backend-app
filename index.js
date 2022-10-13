const express = require('express');
const app = express();
const { Prisma } = require("@prisma/client")
const prisma = require('./utils/prisma')

const getUsers = async (req, res) => {
    const allUsers = await prisma.user.findMany()
    res.status(201).json({ users: allUsers });
};

app.get("/", getUsers);

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`\n Server is running on http://localhost:${port}\n`);
});