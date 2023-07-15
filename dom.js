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

//console.log(li);
//console.log(li[1]);
//var li = document.getElementsByTagName('li');
//li[1].textContent='Hello 2';
//li[1].style.fontWeight = 'bold';
//li[4].style.backgroundColor = 'green';


//for(var i = 0;i<li.length;i++){
//    li[i].style.backgroundColor = 'yellow';
//}

//ar lister = document.getElementsByClassName('Lister');
//lister.style.backgroundColor = 'red';

// QUERYSELECTOR //

//var header = document.querySelector('#main-header');
//header.style.borderBottom = 'solid 4 px #ccc';

//var input = document.querySelector('input');
//input.value = 'Hello World';

//var submit = document.querySelector('input[type="submit"]');
//submit.value='SEND' 

//var secondItem = document.querySelector
//('.list-group-item:nth-child(2)');
//secondItem.style.backgroundColor = 'green';

//var secondItem = document.querySelector
//('.list-group-item:nth-child(3)');
//secondItem.style.color = 'white';

// QUERYSELECTORALL //

//var titles = document.querySelectorAll('.title');

//console.log(titles);
//titles[0].textContent = 'Hello';

//var odd = document.querySelectorAll('li:nth-child(odd)');
//var even = document.querySelectorAll('li:nth-child(even)');

//for(var i = 0; i < odd.length; i++){
//   odd[i].style.backgroundColor = '#f4f4f4'; 
//   even[i].style.backgroundColor = '#ccc';
//}

//Traversing the DOM//

// var itemlist = document.querySelector('#items');

//parentNode
//console.log(itemlist.parentNode);
//itemlist.parentNode.style.backgroundColor = '#f4f4f4';
//console.log(itemlist.parentNode.parentNode.parentNode);

//parentElement

//console.log(itemlist.parentElement);
//itemlist.parentElement.style.backgroundColor = '#f4f4f4';
//console.log(itemlist.parentElement.parentElement.parentElement);

//childNodes
//console.log(itemlist.childNodes);

//console.log(itemlist.children);
//console.log(itemlist.children[1]);

//itemlist.children[1].style.backgroundColor = 'yellow';

//FirstChild
//console.log(itemlist.firstChild);

//firstElementChild
//console.log(itemlist.firstElementChild);
//itemlist.firstElementChild.textContent = 'Hello 1';

 //lastChild
//console.log(itemlist.lastChild);

//lastElementChild
//console.log(itemlist.lastElementChild);
//itemlist.lastElementChild.textContent = 'Hello 4';

//nextSibling
//console.log(itemlist.nextSibling);

//nextElementSibling
//console.log(itemlist.nextElementSibling);

//previosSibling
//console.log(itemlist.previousSibling);
//previousElementSibling
//console.log(itemlist.previousElementSibling);
//itemlist.previousElementSibling.style.color = 'green';

 // createElement

 // create a div
 //var newDiv = document.createElement('div');

 // Add class
 //newDiv.className='hello';

 //Add id
//  newDiv.id ='hello';

 //Add attribute
//  newDiv.setAttribute('title','Hello Div');

 //create text node
//  var newDivText = document.createTextNode('Hello World');

 //Add text to div
//  newDiv.appendChild(newDivText);

//  var container = document.querySelector('header .container');
//  var h1 = document.querySelector('header h1');
//  console.log(newDiv);
//  newDiv.style.fontSize = '30px';

//  container.insertBefore(newDiv, h1);