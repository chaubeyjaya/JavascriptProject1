// let div =document.querySelector("div")
// console.log(div)

// let id  = div.getAttribute("id")
// console.log(id)

// let name = document.getAttribute("name")  //<h1 id="jaya" name"idfield"">so gere id and name are attribute of h1 tag

// console.log(name)

// let para = document.querySelector("p")
// console.log(para.getAttribute("class"))

// console.log(para.setAttribute("class","abc"))




//for changing the style of any node


// let div = document.querySelector("div")
// let chnage =div.style.backgroundColor="green"
// console.log(chnage)
// div.style.fontSize="23px"
// div.innerText="Hello"


//create th elemet
let newbtn = document.createElement("button")
newbtn.innerText="click me"
console.log(newbtn)

//insert elemt 
// let div = document.querySelector("div")
// div.append(newbtn) //add at end of node (inside)
// div.prepend(newbtn) //add at start of node
// div.after(newbtn) //add after node(outside)
// div.before(newbtn)

//example
// let newheading = document.createElement("h1")
// newheading.innerHTML = "<li>i am developer</li>"
// document.querySelector("body").prepend(newheading)

//delete elelmt
// let para = document.querySelector("p")
// para.remove();