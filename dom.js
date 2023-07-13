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

//GET ELEMENTS BY CLASS NAME//

//var items = document.getElementsByClassName('list-group-item');
//console.log(items);
//console.log(items[1]);
//items[1].textContent='Hello 2';
//items[1].style.fontWeight = 'bold';
//items[2].style.backgroundColor = 'green';

//items.style.backgroundColor = 'f4f4f4';

//for(var i = 0;i<items.length;i++){
//    items[i].style.fontWeight = 'bold';
//}

//GET ELEMENTS BY TAG NAME//

var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent='Hello 2';
li[1].style.fontWeight = 'bold';
li[4].style.backgroundColor = 'green';


//for(var i = 0;i<li.length;i++){
//    li[i].style.backgroundColor = 'yellow';
//}

v//ar lister = document.getElementsByClassName('Lister');
//lister.style.backgroundColor = 'red';