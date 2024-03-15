

let search = document.getElementById("search-input");
let searchBtn = document.getElementById("search");
let result = document.getElementById("result");

$(searchBtn).click(()=>{
    let searchVal = search.value.trim().toLowerCase();
    let response = fetchData();
    let searchItems = searchItems(response,searchVal);
    updateResult(searchItems);
});

function fetchData(){
    let data;
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState==4&&xhr.status==200){
            data = (JSON.parse(xhr.responseText));
        }
    }
    xhr.open('get','./details.json',false);
    xhr.send();
    return data.items;
}

function searchItem(response,searchVal){
    searchItem.forEach(el=>{
        result.innerHTML +=`<div class="cards">
        <h3>${el.itemName}</h3>
        <p>${el.price}</p>
        </div>`; 
    })
}