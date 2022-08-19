function map(array, callback) {
    for (const element of array) {
      callback(element);
    }
  }

  map([1, 2, 3], function (num) {
    console.log(num * num);
  });
//*********************************************************/


  function map(array, callback) {
    const newArr = [];

    for (const element of array) {
      newArr.push(callback(element));
    }

    return newArr;
  }

const originalNumbers = [1, 2, 3, 4, 5];

const squaredNumbers = map(originalNumbers, function (num) {
  return num * num;
});

originalNumbers;
squaredNumbers;

//*********************************************************/
const oldAccounts = [
    { userID: 15, title: "Developer Apprentice", accessLevel: "user" },
    { userID: 63, title: "Developer Apprentice", accessLevel: "user" },
    { userID: 97, title: "Developer Apprentice", accessLevel: "user" },
    { userID: 12, title: "Developer Apprentice", accessLevel: "user" },
    { userID: 44, title: "Developer Apprentice", accessLevel: "user" },
  ];

  const newEngineers = map(oldAccounts, function (account) {
    return Object.assign({}, account, { accessLevel: "admin" });
  });

  oldAccounts;
  newEngineers;

