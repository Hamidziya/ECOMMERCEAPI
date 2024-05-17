// const getdata =async()=>{
//     return new Promise(async(resolve, reject) => {
//         setTimeout(() => {
//             reject("returned data")
//         }, 2000);
//     })
// }
//  await getdata().then((data)=>{
//     console.log(data)
// }).catch((error)=>{console.error(error)})
// write a query to remove duplicate

// duplicate fields email and mobile
// user populate

// const creds = {
//     user: ObjectId("wfwfewefwefewffewf"),
//     userID: "shivam@gmail.com",
//     projectCode: ObjectId("wfwfewefwefewff"),
//   };
  
//   const user = {
//     _id: ObjectId("wfwfewefwefewffewf"),
//     name: "Shivam",
//     age: 26,
//     empcode: "1560",
//   };
//   const project = {
//     _id: ObjectId("wfwfewefwefewffewf"),
//     name: "Project112",
//     createdAt: "23-05-2023",
//     deadline: "23-05-2024",
//   };
  
//   result = {
//     name: "Shivam",
//     age: 26,
//     empcode: "1560",
//     projectName: "Project112",
//     projectCreatedAt: "23-05-2023",
//     projectDeadline: "23-05-2024",
//     userID: "shivam@gmail.com",
//   };


// database.orders.aggregate([
//     {
//         $lookup:{
//             from:'creds',
//             localField:'_id',
//             foreignField:''
//         }
//     }
// ])


// const json = [
//     {
//       name: "Ankit",
//       salary: 6.5,
//       DOB: "1996-12-11",
//     },
//     {
//       name: "Shivam",
//       salary: 6.5,
//     },
//     {
//       name: "Kalesh",
//     },
//     { 
//       name: "Aman",
//       DOB: "1998-02-22",
//     },
//   ];
  
  // result;
  // "Ankit, monthly salary 55000, age 26";
  // "Ankit,age 26";
  // Ankit, monthly salary 55000";
  // "Ankit";
  

  // for(let i=0; i<length.json;i++){
  //   let obj = json[i]
  //   // obj.map((value)=>{

  //   // })
  //   for(let value)
  // }

// let n = 10

// for(let i = 0; i<n; i++){
//   let prime  = true
//   for(let j = 2; j<i; j++){
//     if(i%j == 0){
//       prime = false
//     }
//   }
//   if(i>=2&&prime==true){
//     console.log(i)
//   }

// }
// function generateCombinations(arr, r) {
//   const combinations = [];
  
//   for (let i = 0; i < arr.length - 2; i++) {
//       for (let j = i + 1; j < arr.length - 1; j++) {
//           for (let k = j + 1; k < arr.length; k++) {
//               combinations.push([arr[i], arr[j], arr[k]]);
//           }
//       }
//   }
  
//   return combinations;
// }

// const array = [1, 2, 3, 4, 5];
// const r = 3;
// const combinations = generateCombinations(array, r);
// console.log(combinations);




//   let arr = [2,3,4,5,6,7,8,9,10,11]

//   let arrprime = []

// let prime = true
//   for(let i= 0; i<arr.length; i++){
//     let n = arr[i]
//     for (let j = 0; j<n; j++){
//       for(let k = 2; k<j; k++){

//         if(j%k == 0){
//           prime = false
//         }

//       }
//       if(j >= 2 && prime == true){
//         arrprime.push(n)
//       }

//     }

  
//   }
//   console.log("prime "+arrprime)

// let arr1 = []
// let arr2 = []
// function isPrime(num) {
//   if (num <= 1) {
//     return false;
//   }
//   if (num <= 3) {
//     return true;
//   }
//   if (num % 2 === 0 || num % 3 === 0) {
//     return false;
//   }
//   for (let i = 5; i * i <= num; i += 6) {
//     if (num % i === 0 || num % (i + 2) === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// function findPrimeNumbers(arr,callback) {
//   callback(arr.filter(isPrime))
// }

// const numbers = [2, 3, 5, 7, 11, 14, 17, 23, 29, 31, 37];
// findPrimeNumbers(numbers,(val)=>{

//   const values = Object.values(val);
//   const minValue = Math.min(...values);
//   const maxValue = Math.max(...values);
//   console.log('min'+minValue)
//   console.log('max'+maxValue)

// });



function allcomb(){
  let combinations = []
  for(let i = 0; i<10; i++){
    for(let j = 0; j<10; j++){
      for (let k = 0; k<10; k++){
        for(let l = 0; l<10; l++){
          const no = `${i}${j}${k}${l}`
          combinations.push(no)
        }
      }
    }
  }
  console.log("all combinations"+combinations)
}
//allcomb()



let arr = [-1, -2, 0, 1,3,5]
let max = 0
for(let k = 0; k<arr.length; k++ ){
  if(max<arr[k]){
    max = arr[k]
  }
}
function firstmiss(arr){
  for(let i =1 ; i<max; i++){
    if(!arr.includes(i)){
      console.log("---- "+i)
      break 
    }
  }
}
//firstmiss(arr)


// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
// let  nums1 = [1,2,3,0,0,0]
// let nums2 = [2,5,6]
// // Output: [1,2,2,3,5,6]
 
//  function mergearrayfunction(nums1, nums2){
//      let mergearray = nums1.concat(nums2)
//      let result = mergearray.filter(num=> num !==0)
//      return result
//  }
// let sorte = mergearrayfunction(nums1,nums2)
// console.log(sorte)
  
  //function isSort()
  
//   let arr = [7, 6,5, 12, 1]
//   [5,6 ,7, 1,12]
  
//   function bubbleSort(arr){
//       const n = arr.length;
//       for(let i =0 ; i<n-1; i++){
//           for(let j= 0; j<n-i-1; j++){
//               if(arr[j]>arr[j+1]){
//                   let temp = arr[j]
//                   arr[j] = arr[j+1]
//                   arr[j+1] = temp
//               }
//           }
//       }
//       return arr
//   }
//   let sortarray = bubbleSort(arr)
//   console.log(sortarray)
  
  //->comparing 5 an 3 since 
  // Ques 3. Given an integer x, return x with its digits reversed.
  let num = -103

  //   function reverseNumber(num){
  //       let sign  = Math.sign(num)
  //       let absolute = Math.abs(num)
  //       let reversestring = absolute.toString().split('').reverse().join('')
  //       let reverseNum = parseInt(reversestring)*sign
  //       return reverseNum
  //   }
  //   let reverseNumbe = reverseNumber(num)
  //   console.log(reverseNumbe)
  
  // function reverseNumber(num){
  //     let reverseNumbers = 0;
  //     let isNegative = num<0;
  //     num = Math.abs(num);
  //     while(num>0){
  //         reverseNumbers = reverseNumbers*10+num %10
  //         num  = Math.floor(num/10)
  //     }
  //     if(isNegative){
  //         reverseNumbers *= -1;
  //     }
  //     return reverseNumbers
  // }
  // let reverse = reverseNumber(num)
  //  console.log(reverse)
  
  // for (var i = 1; i <= 3; i++) {
  //     setTimeout(() => {
  //       console.log(i);
  //     }, i * 1000);
  // }
   
   
   
   
   
  
  
  
  
  
  