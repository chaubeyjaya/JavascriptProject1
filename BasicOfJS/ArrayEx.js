let mark =[12,13,14,15,16]
// console.log(mark)
// console.log(typeof(mark))//object type 
// //index of array
// console.log(mark[0])
// //update the value of array array are mutable nad string are immutable imp note
// mark[4] =99
// console.log(mark)

//print value of array with for in loop
// for(let i in mark){
//     console.log(mark[i])
// }

// for of loop generraly we use this 
// for(let i of mark){
//     console.log(i)
// }

// for(let i=0;i<mark.length;i++){
//     console.log(mark[i])
// }

//question find the avg of marks

// let marks = [2,2,2]
// let total = marks.length
// let sum =0;
// for(let i =0;i<marks.length;i++){
//   sum +=marks[i]
// }
// console.log(sum)
// let avg = sum/total;
// console.log(avg)

//second way using for of loop
// let marks = [2,2,2]
// let total = marks.length
// let sum =0;
// for(let i of marks){
//     sum += i
// }
// console.log(sum)
// let avg = sum/total;
// console.log(avg)

//question::for given array all item have offer of 10% off on them .change the array to store final price after applying
// let item = [100,200,300,400,500]

// for(let i=0;i<item.length;i++){
   
//     let offer = item[i]/10;
//     item[i] = item[i] - offer

// }
// console.log(item)




//array method
let item =[1,2,3,4,5,6,7]
// console.log(item.push(20))
// console.log(item)
// console.log(item.pop())  //remove th last element

// console.log(item.toString()) 
// console.log(item)
//unshift push the element at starting
console.log(item.shift()) //delete th fisrt vale
console.log(item)

console.log(item.slice(1,3))
console.log(item.splice(3,2,90,80))