function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  
  return arr1.every((element, index) => element === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
  const filteredAges = users
    .filter(user => user.gender === gender)
    .map(user => user.age);

  if (filteredAges.length === 0) {
    return 0;
  }

  const sumAges = filteredAges.reduce((acc, age) => acc + age, 0);
  return sumAges / filteredAges.length;
}
