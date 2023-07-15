var form = document.getElementById("addForm");
var itemList = document.getElementById("items");

//Form Submit Event
form.addEventListener("submit", addItem);

// Delete Event
itemList.addEventListener("click", removeItem);

//Add Item
function addItem(e) {
  e.preventDefault();

  // Get Input Value
  var newItem = document.getElementById("item").value;

  // Create new li element
  var li = document.createElement("li");

  // Add Class
  li.className = "list-group-item";

  //Add text node with input value
  li.appendChild(document.createTextNode(newItem));

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
