// Syntax:arr.forEach(callbackfunction)
// callbackfunction:it is function execute for each element in Arraya
//  callback function is a function passed as
//  an argument in another functiom

// let arr =[1,2,3,4,5]
// arr.forEach((val)=>{
//     console.log(val)
// })

// let arr =["riya","jaya","jiya","gunguni"]
// arr.forEach((val,inx,arr)=>{
//     console.log(val.toUpperCase(),inx,arr)
// })

//higher order function is function that 
// take another function as paramenter or they return function as output


//question:for given array of number print the square of each value using foreach loop

// let arr = [2,3,4,5]
// arr.forEach((val)=>{
//     console.log(val*val)
    
// })

//another way
// let arr = [2,3,4,5]
// const calsquare =(val)=>{
//     console.log(val*val)
    
// }
// arr.forEach(calsquare)


//map method

// it give us new array 
//map use to print all value
// let num =[2,3,4,5]
// num.map((val)=>{
//     console.log(val)
    
// })

//square of number
// let num =[2,3,4,5]
// const newarr = num.map((val)=>{
//    return val*val;
    
// })
// console.log(newarr)
// console.log(num)


//filter method
//it create a new array of element that givr true for a condition/filter.
// Eg.all even element
// let arr = [2,3,6,8,5]
// const newarr=arr.filter((val)=>{
//     if(val%2==0){
//         return val;
//     }
// })
// console.log(newarr)

//reduce method
// let arr =[1,2,3,4,5]
// const output = arr.reduce((res,curr)=>{
//     return res + curr
// })
// console.log(output)
// res =1;curr=2 it will first two vale of array


//find largest elemnt of array
let arr =[2,3,4,5,6]
const output=arr.reduce((res,cur)=>{
    return res>cur?res:cur;
})
console.log(output)