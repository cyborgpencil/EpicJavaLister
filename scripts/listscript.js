

function AddListItem(){

  // Get currrent text
  var currentTextList = document.getElementById("item_text").value;

  //Add Text to UL
  if(currentTextList)
  {
    // Create LI Object
    var li = document.createElement("li");
    li.innerText = currentTextList;

    var button = document.createElement('input');
    button.type='button';
    button.value ="delete";
    button.addEventListener('click', removeItem);

    li.appendChild(button);

    document.getElementById('ul_List').appendChild(li);
  }

  // Clear textbox
  document.getElementById("item_text").value = null;
}

function removeItem(){
  var item = this.parentNode;
  var list = item.parentNode;

  list.removeChild(item);


}

// add eventlistener to add item to list
document.getElementById('addItem_button').addEventListener('click', AddListItem);
