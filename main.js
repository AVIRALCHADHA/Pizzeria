var menu_list_array=[
"Chicken Tandoori Pizza"
"Deluxe Veggie Pizza"
"Paneer tikka pizza"
"Veg extravaganza pizza"
"Veg supeme pizza"
];
function getmenu(){
    var htmldata;
    htmldata="<ol class='menulist'>"
    menu_list_array.sort()
    for(var i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+'<li>' + menu_list_array[i]
}
htmldata=htmldata+"</ol>"
document.getElementById("displayMenu").innerHTML=htmldata;
}
function add_item(){
    var htmldata;
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata="<section class='cards'>"
    for(var i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+ '<div class="card">'+'<img src="images/pizzaIng.png"/>'+
        menu_list_array[i] + '</div>'
}
htmldata=htmldata+"</section>"
document.getElementById("displayAddMenu").innerHTML=htmldata;
}