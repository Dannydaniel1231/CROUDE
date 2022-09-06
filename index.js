


var selectdRow = null;
function onFormSubmit(e){
event.preventDefault();
var formData = readFormData();
if(selectdRow === null){
    insertNewRecord(formData);
}
else{
     
}
}
function readFormData(){
    var formData = {};
    formData["productCode"] = document.getElementById("productCode").value;
    formData["product"] = document.getElementById("product").value;
    formData["qty"] = document.getElementById("qty").Value;
    formData["perPrice"] = document.getElementById("perPrice").Value;
     return formData;



}
 
 function insertNewRecord(data){
    var table = document.getElementById("storelist").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
     cell1.innerHTML = data.productCode;
     var cell2 = newRow.insertCell(1);
     cell2.innerHTML = data.product;
     var cell3 = newRow.insertCell(2);
     cell3.innerHTML = data.qty;
     var cell4 = newRow.insertCell(3);
     cell4.innerHTML = data.perPrice;
     var cell5 = newRow.insertCell(4);
     cell5.innerHTML =`<button>edit</button> <button>delete</button>`
 } 