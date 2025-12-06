//window object is browser object it nt javacript object it global object
//alert is also window object 
// DOM:window->document->html->head->h1
// dom is html ko javasciprt se access krne ka ek tarika hai
         //for dynamic changes we use    Dom   

console.log(document.body.style.backgroundColor="green")

//selecting element with id
// const heading = document.getElementById("heading")
// console.log(heading)

// //selecting element by classname
// const head = document.getElementsByClassName("heading")
// console.log(head)

//selelcting with tag
// let par =document.getElementsByTagName("p")
// console.log(par)


//querselector:in querSelector we can pss id classname and tag 
// const firstele = document.querySelector("# heading")//retuen the first element
// console.log(firstele)
// document.querySelectorAll("p")//return an node list




// tagname
// const firstele = document.querySelector("p")//retuen the first element
// console.log(firstele)
// console.log(firstele.tagName)


// inner text
// three imp node:textnode ,element node and comment node,first element and last element

// let div = document.querySelector("div")
// console.log(div)  //innertext mai pure  text aata hai
// console.log(div.innerHTML) //ye htm tag ko bhi properly show krt ahai
// console.log(div.innerText="abcd")


// let head = document.querySelector("h1")
// console.log(head.innerText="newtext")//dynamically change th h1
// console.log(head.textContent)//it will show th hidden connetet of h1

let head = document.querySelector("h1")
console.log(head.innerText)
console.log(head.innerText = head.innerText +" welcome jariya")