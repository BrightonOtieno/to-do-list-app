// Grab the form and the Unordered list
var form = document.getElementById('addForm');
var itemlist = document.getElementById('myitems');
var  filter = document.getElementById('filter');


// adding an EventListener 
// submit event
if(form){
    form.addEventListener('submit', addItems);
}
// Remove an event
if(itemlist){
    itemlist.addEventListener('click',removeItems);
}
if(filter){
    filter.addEventListener('keyup', filterItems)
}


// Define the function
function addItems(e){
    e.preventDefault();
    //Grab the value of the input list in the form
    
    var newItem = document.getElementById('formInput').value;
    // Create an HTML ELEMENT (li)
    var li = document.createElement('li');
    // add a class to it 
    li.className ='list-group-item';
    // add text node with input values
    li.appendChild(document.createTextNode(newItem));
    // append the list to the Ul

    itemlist.appendChild(li);
    // Create a button for delete
    var deletebtn = document.createElement('button');
    // add classes to deletebtn
    deletebtn.className = 'btn btn-sm btn-danger float-right delete';
    // Append a TextNODE
    deletebtn.appendChild(document.createTextNode('x'));
    // Append to li
    li.appendChild(deletebtn);


}

// Functions for removing items from the list
function removeItems(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure ?')){
            var li = e.target.parentElement;
            itemlist.removeChild(li);
        }
}
}

//Filter Function
function filterItems(e){
    // convert the input value to  lowercase
    var text = e.target.value.toLowerCase();
    // Grab all the li s
    var items = document.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })
}
