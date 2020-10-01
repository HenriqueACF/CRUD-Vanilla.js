var selectedRow = null;

function onformSubmit(){
    if(validate()){
        var formData = readFormData();
        if(selectedRow==null)
        insertNewRecord(formData);
        else
        updateRecord(formData)

        resetForm();
    }
}
function readFormData(){
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["EMPCode"] = document.getElementById("EMPCode").value;
    formData["Salario"] = document.getElementById("Salario").value;
    formData["cidade"] = document.getElementById("cidade").value;
    return formData;
}
function insertNewRecord(data){
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.EMPCode;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Salario;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.cidade;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML=`<a onClick="onEdit(this)">Edit</a>
    <a onClick="onDelete(this)">Delete</a>`;
}
function resetForm(){
    document.getElementById("fullName").value="";
    document.getElementById("EMPCode").value="";
    document.getElementById("Salario").value="";
    document.getElementById("cidade").value="";
    selectedRow = null;
}
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("EMPCode").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Salario").value = selectedRow.cells[2].innerHTML;
    document.getElementById("cidade").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.EMPCode;
    selectedRow.cells[2].innerHTML = formData.Salario;
    selectedRow.cells[3].innerHTML = formData.cidade;
}
function onDelete(td){
    if(confirm("Voce quer deletar?")){
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}