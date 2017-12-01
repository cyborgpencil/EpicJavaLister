
function AddListItem(){
  // Get currrent text
  var currentTextList = document.getElementById("item_text").value;

  //Add Text to UL
  if(currentTextList)
  {
    // Create LI Object
    var li = document.createElement("li");
    li.innerHTML = currentTextList +"  <input type='button' value='delete' />";
    //document.create
    document.getElementById("ul_List").appendChild(li);
    // Debug
    console.log(li);
  }

  // Clear textbox
  document.getElementById("item_text").value = null;
}
