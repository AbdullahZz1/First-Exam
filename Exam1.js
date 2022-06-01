function over(element) {  
    element.src="succulents-2.jpg"; 
}
    
function out(element) {
    element.src="succulents-1.jpg"
}

const collection = document.getElementsByClassName("alert");
function remove(){
for (let i = 0; i < collection.length; i++) {
  collection[i].remove();
}
}