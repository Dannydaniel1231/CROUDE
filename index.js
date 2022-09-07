


var selectdRow = null;
function onFormSubmit(e){
event.preventDefault();
var formData = readFormData();
if(selectdRow === null){
    insertNewRecord(formData);
}
else{
     updateRecord(formData);
}
resetForm();
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
     cell5.innerHTML =`<button onclick="onEdit(this)">edit</button> <button onClick= "onDelete(this)">delete</button>`
 } 


 function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("productCode").value = selectdRow.cells[0].innerHTML;
    document.getElementById("product").value = selectdRow.cells[1].innerHTML;
    document.getElementById("qty").value = selectdRow.cells[2].innerHTML;
    document.getElementById("perPrice").value = selectdRow.cells[3].innerHTML;
 }

 function updateRecord(formData){
    selectedRow = td.parentElement.parentElement;
     selectdRow.cells[0].innerHTML.formData.productCode;
     selectdRow.cells[1].innerHTML.formData.product;
    selectdRow.cells[2].innerHTML = formData.qty;
    selectdRow.cells[3].innerHTML = formData.perPrice;
 }

 function onDelete(td){
    if(confirm("Do u want to delete this record?")){
        row = td.parentElement.parentElement;
        document.getElementById("storeList").deleteRow(row.rowIndex);
    }
    resetForm();
 }
 function resetForm(){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("productCode").value = "";
    document.getElementById("product").value = "";
    document.getElementById("qty").value = "";
    document.getElementById("perPrice").value = "";
 }

