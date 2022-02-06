const xhr = new XMLHttpRequest(); 
const url = "https://jsonplaceholder.typicode.com/users" 
xhr.open('GET', url); 
xhr.onload = function() {
  if (this.status == 200) {
    console.log(xhr.response); 
  }
};
xhr.send();