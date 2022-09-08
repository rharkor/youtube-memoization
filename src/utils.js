const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

const users = [
  {
    name: "User1",
    age: 56,
    email: "user1@email.com",
  },
  {
    name: "User2",
    age: 17,
    email: "user2@email.com",
  },
  {
    name: "User3",
    age: 32,
    email: "user3@email.com",
  },
];

module.exports = {
  sleep,
  users,
};
