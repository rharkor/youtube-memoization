const { api } = require("./src/api");
const {sleep } = require('./src/utils')

const start = async () => {
    for (let i = 0; i < 2; i++) {
        const users = await api.getAllUsers();
        console.table(users);
    }

    await sleep(900)

    const users = await api.getAllUsers();
    console.table(users);
};

start();
