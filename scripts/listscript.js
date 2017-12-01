var ul = document.createElement("ul");
ul.id = "ul_List";
var currentItemList = [];

function LoadPage(){
  document.getElementById('list_location').appendChild(ul);
}

function AddListItem(){

  // Get currrent text
  var currentTextList = document.getElementById("item_text").value;

  //Add Text to UL
  if(currentTextList)
  {
    // Create LI Object
    var li = document.createElement("li");


    //if(ul.children.length > 0 || ul.children.length != undefined){
      //id_num = ul.children.length-1;
    //}
  //  else {
    //id_num = 0;
    //}
    li.innerHTML = currentTextList+"  <input type='button' value='delete' onclick='deleteListItem(this.parentNode)'/>";
    //document.create
    //currentItemList.push(li);
    //ul.innerHTML = "";
    //for (var i = 0; i < currentItemList.length; i++) {
      ul.appendChild(li);
    //}
  }

  // Clear textbox
  document.getElementById("item_text").value = null;
}

function deleteListItem(item)
{

  //currentItemList.pondex);
  //item.parentNode.parentNode.removeChild(item.parentNode);
  //console.log(item.parentNode.parentNode.parentNode.children);
  //console.log(item.parentNode.children.length);
  for (var i = 0; i < ul.children.length; i++) {
    document.getElementById("ul_List").removeChild();
  }

  //console.log(item);
}
