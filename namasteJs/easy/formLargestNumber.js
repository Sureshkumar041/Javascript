import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello world</h1>
`;

function formLargestNumber(arr) {
  //write your implementation here

  let dataArr = [];

  console.log(`formLargestNumber...`);

  function findLargestNum(argArr) {
    let allLargestNums = [];

    for (let i = 0; i < argArr.length - 1; i++) {
      let largestNum = null,
        newArr = argArr.slice(i),
        dataObj = null;

      for (let j = 0; j < newArr.length; j++) {
        let jLargestNum = null;

        if (`${argArr[i]}${newArr[j]}` > `${newArr[j]}${argArr[i]}`)
          jLargestNum = `${argArr[i]}${newArr[j]}`;
        else jLargestNum = `${newArr[j]}${argArr[i]}`;

        if (jLargestNum > largestNum) {
          largestNum = jLargestNum;
          dataObj = {
            largestNum: jLargestNum,
            aIndex: i,
            bIndex: argArr.findIndex((v) => v === newArr[j]),
          };
        }
      }

      allLargestNums.push(dataObj);
    }

    return allLargestNums.reduce(
      (acc, cur) => (cur.largestNum > (acc.largestNum || 0) ? cur : acc),
      {}
    );
  }

  const a = findLargestNum(arr.sort((a, b) => a - b));
  const b = findLargestNum(
    arr.filter((v, i) => i !== a.aIndex && i !== a.bIndex)
  );

  console.log(
    "Data: ",
    arr.filter((v, i) => i !== a.aIndex && i !== a.bIndex)
  );

  console.log("a: ", a);
  console.log(
    "b: ",
    arr.sort((a, b) => a - b)
  );
}

const input = [3, 30, 34, 5, 9];
// 330 - 303 = 330
// 334 - 343 = 343
// 35 - 53 = 53
// 39 - 93 = 93
// 93

// 3034 - 3430 = 3430
// 305 - 530 = 530
// 309 - 930 = 930
// 930

// 345 - 534 = 534
// `349 - 934 = 934
// 934

// 59 - 95 = 95

// 95

formLargestNumber(input);

module.exports = formLargestNumber;
