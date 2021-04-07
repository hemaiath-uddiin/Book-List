//select 
// add listner 
// validation 
//creat element  


let title = document.querySelector("#Title");
let author = document.querySelector("#author");
let fiction = document.querySelector("#fiction");
let btn = document.querySelector("#btn"); 
let book = document.querySelector("#bookList")
btn.addEventListener("click",addBook); 

function addBook() {
  if (title.value == "" && author.value== "" && fiction.value == "") {
       alert("pleace fillup  the input Box")
  } else {
    let newRow = document.createElement("tr"); 
    let newTitle = document.createElement("th"); 
       newTitle.innerHTML = title.value; 
       newRow.appendChild(newTitle); 
        title.value = "";

       let newAuthor = document.createElement("th"); 
       newAuthor.innerHTML = author.value; 
       newRow.appendChild(newAuthor); 
       author.value = ""
 
       let newFiction = document.createElement("th"); 
       newFiction.innerHTML = fiction.value; 
       newRow.appendChild(newFiction); 
       fiction.value = "";
       book.appendChild(newRow);
     
     
      }
}
