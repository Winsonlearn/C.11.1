const numberSet = new Set([1, 4, 5, 6, 3, 5]);
numberSet.add(5);
numberSet.add(8);
numberSet.add(23);
numberSet.add(43);

console.log(numberSet);
numberSet.delete(43);

console.log(numberSet);