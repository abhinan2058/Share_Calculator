function calculate(){
    //getting data
let qty = parseFloat(document.getElementById("quantity").value);
let price = parseFloat(document.getElementById("price").value) ;


//finding total Amount
let total = (qty*price);
totalAmount.textContent = total;


//finding Commission
if(total <=50000)
{
    comm=0.004*total;
}
else if( total>50000 && total <=500000){
    comm=0.0037*total;
}
else if( total>500000 && total <=2000000){
    comm=0.0034*total;
}
else if( total>2000000 && total <=10000000){
    comm=0.003*total;
}
else {
    comm=0.0027*total;
}

commission.textContent=comm;

// let com = parseFloat(document.getElementById("commission").value);
const dpfee= parseFloat(25);




let sebonFee = 0.00015*total;
sebon.textContent= sebonFee;

dp.textContent=dpfee;
// let pay = `${total + com + fee}`;
let tot = dpfee + total + comm + sebonFee;
amount.textContent=tot;

let costPerShare = tot/qty;
cost.textContent = costPerShare;



} 
function Clear(){
document.getElementById("price").value ="";
document.getElementById("quantity").value ="";
// var i = document.getElementById("price");
// i.value="";
// quantity.textContent="";
// price.textContent="";
}

function navigate(){
var selectElement = document.getElementById("type");
        var selectedValue = selectElement.value;

        // Check if a valid option is selected
        if (selectedValue) {
            // Redirect to the selected page
            window.location.href = selectedValue;
        }
}