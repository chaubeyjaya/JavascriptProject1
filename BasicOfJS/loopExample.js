// for(let i =1;i<=10;i++){
//     console.log(i)
// }

//break statment
// for(let i =1;i<=10;i++){

//     if(i==5){
//         break;
//     }
//     console.log(i)
// }

//continue example
// for(let i =1;i<=10;i++){
//     if(i==5){
//         continue;
//     }
//     console.log(i)
// }

//while loop
// let i =1;
// while(i<10){
//     console.log(i);
//     i++
// }


//do while loop
// let i =10;
// do{
//     console.log(i);
//     i++
// }
// while(i>20)

//for in loop:use for object and array
const student={
    name:"jaya",
    age:12,
    class:"TYIT"

}
//it print the key of object
for(let key in student){
    console.log("key=",key ,"value =",student[key])
}
