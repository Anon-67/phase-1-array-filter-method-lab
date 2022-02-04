


const findMatching = (arr, str) => arr.filter(function(ele) {
        return ele.toLowerCase() === str.toLowerCase();
    })

function findMatching2(arr, str) {
    return arr.filter(function (ele){
        return ele.toLowerCase() === str.toLowerCase();
    });
}


const fuzzyMatch = (arr, str) => arr.filter(function(ele) {
    return ele.charAt(0) === str.charAt(0);
});


const matchName = (arr, str) => arr.filter(function(ele) {
    return ele.name == str;
});



















// const drivers = [
//     {
//       name: 'Bobby',
//       hometown: 'Pittsburgh' },
//     {
//       name: 'Sammy',
//       hometown: 'New York' } ,
//     {
//       name: 'Sally',
//       hometown: 'Cleveland' },
//     {
//       name: 'Annette',
//       hometown: 'Los Angeles' },
//     {
//       name: 'Bobby',
//       hometown: 'Tampa Bay' }
//   ]






// function findMatching(arr, str) {
//     const newArr = arr.filter(function (ele) {
//         return ele.name == str;
//          });
//     let secArr = [];
//     newArr.forEach(function (ele) {
//         secArr.push(ele.name)
//     });
//     console.log(secArr);
//     return secArr;
// };




// // let thirdArr = [];

// // secArr.forEach(function (ele) {
// //     thirdArr.push(ele.name);
// // });
 
// findMatching(drivers, "Bobby");

// // console.log(secArr);



// // let fuckNose = [{ name: 'Bobby', hometown: 'Pittsburgh' }, { name: 'Bobby', hometown: 'Tampa Bay' }];

// // console.log(fuckNose[0].name);