//Examine the document object 

//console.dir(document);

//console.log(document.documentURI)

//GET ELEMENT BY ID//

//var headerTitle = document.getElementById('header-title');
//var header = document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent = 'Hello'
//headerTitle.innerText = 'GoodBye'
//console.log(headerTitle.innerText);
//header.style.borderBottom = 'solid 3px #000'

//GET ELEMENT BY CLASS NAME//

var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent='Hello 2';
items[1].style.fontWeight = 'bold';
//items[1].style.backgroundColor = 'yellow';

//items.style.backgroundColor = 'f4f4f4';

for(var i = 0;i<items.length;i++){
    items[i].style.backgroundColor = '#f4f4f4';
}
