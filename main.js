var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById('filter');

//Form Submit Event
form.addEventListener("submit", addItem);

// Delete Event
itemList.addEventListener("click", removeItem);

// Filter Event
filter.addEventListener('keyup', filterItems);

//Add Item
function addItem(e) {
  e.preventDefault();

  // Get Input Value
  var newItem = document.getElementById("item").value;

  // Get Input Value description
  var desItem = document.getElementById("description").value;



  // Create new li element
  var li = document.createElement("li");

  // Add Class
  li.className = "list-group-item";

  //Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createElement('br'));
  li.appendChild(document.createTextNode(desItem));

  //create delete button element
  var deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  deleteBtn.appendChild(document.createTextNode("X"));
  li.appendChild(deleteBtn);

  //create delete button element
  var editBtn = document.createElement("button");
  editBtn.className = "btn btn-success float-right btn-sm";
  editBtn.appendChild(document.createTextNode("Edit"));
  li.appendChild(editBtn);

  itemList.appendChild(li);
}

//Remove item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are You Sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

//Filter Items
function filterItems(e){
    //convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get List
    var items = itemList.getElementsByTagName('li');
    // Convert to an Array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        var desName = item.childNodes[2].textContent;
        if(itemName.toLowerCase().indexOf(text) !== -1 || desName.toLowerCase().indexOf(text) !== -1){
            item.style.display = 'block';
        } else{
            item.style.display = 'none';
        }
    });
}