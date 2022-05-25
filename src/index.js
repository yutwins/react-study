/**
 * mapやyafilterを使った配列の処理
 */
const nameArry = ["田中", "中村", "勇斗"];
// for (let index = 0; index < nameArry.length; index++) {
//   console.log(nameArry[index]);
// }

// const nameArry2 = nameArry.map((name) => {
//   return name;
// });
// console.log(nameArry2);

// nameArry.map((name) => console.log(name));

const numArry = [1, 2, 3, 4, 5];
const newNumArry = numArry.filter((num) => {
  return num % 2 === 1;
});
console.log(newNumArry);
