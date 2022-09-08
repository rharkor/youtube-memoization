const { sleep, users } = require("./utils");

const memo = {}

const api = {
  getAllUsers: async () => {
    if (memo["getAllUsers"] != null && memo["getAllUsers"].time + 1000 > new Date().getTime())
      return memo["getAllUsers"].data;
    
    console.log("CALL API");
    await sleep(1000);
    memo["getAllUsers"] = { data: users, time: new Date().getTime() };
    return users;
  },
};

module.exports = {
  api,
};
