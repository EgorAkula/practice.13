// N1

console.log('----N1----')
let firstArray = [10, 20, 30];

// N2

console.log('----N2----')
let secondArray = ["hello", 'bye', "yes", "no"];

// N3

console.log('----N3----')
let arr = ['a', 'b', 'c', 'd'];
console.log(arr[0] + "+" + arr[1] + "+" + arr[2] + "+" + arr[3]);

// N4

console.log('----N4----')
let thirdArray = [3, 56, 11111, 5247912];
console.log(thirdArray.length);

// N5

console.log('----N5----')
let fourthArray = [213, 33333333, 1637, 9];
console.log(fourthArray[3]);
// изменить
// N6

console.log('----N6----')
let fifthArray = ['1', '2', '3'];
// изменить
// N7

console.log('----N7----')
let sixthArray = [1, 2, 3, 4, 5];
let newOneArray = sixthArray.map((element) => {
    let firstSum = element + 3;
    return firstSum;
})

console.log(newOneArray);

// N8
// * * * * * * * * * * * КОСТЫЛЬ * * * * * * * * * * *

console.log('----N8----')
let seventhArray = [];
seventhArray.push(1);
seventhArray.push(2);
seventhArray.push(3);
seventhArray.push(4);
seventhArray.push(5);
seventhArray.push(6);
seventhArray.push(7);
seventhArray.push(8);
seventhArray.push(9);
seventhArray.push(10);
seventhArray.push(11);
seventhArray.push(12);
seventhArray.push(13);
seventhArray.push(14);
seventhArray.push(15);
seventhArray.push(16);
seventhArray.push(17);
seventhArray.push(18);
seventhArray.push(19);
seventhArray.push(20);
console.log(seventhArray);

// N9

console.log('----N9----')
let eightArray = [];
for(let numbrs = 10; numbrs <= 40; numbrs++){
    if(numbrs % 2){
        eightArray.push(numbrs);
    }
}
console.log(eightArray);

// N10

console.log('----N10----')
let tenthArray = [10, 20, 30, 40, -1];
for(el of tenthArray) {
    if(el == -1){
        break;
    }
    console.log(el);
}

// N11

console.log('----N11----')
let eleventhArray = [10, 20, 30, 40, 50];
let reversed1 = eleventhArray.reverse();
console.log(reversed1);