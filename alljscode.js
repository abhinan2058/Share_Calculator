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


//sell.js
function calculate() {
    //getting data
    let sq = parseFloat(document.getElementById("quantity").value);
    let pp = parseFloat(document.getElementById("buyPrice").value);
    let sp = parseFloat(document.getElementById("sellingPrice").value);

    //totalSellingAmount
    total = sq * sp;
    totalAmount.textContent = total;

    //Investor Type
    var it = document.getElementById("inv").value;
    investorType.textContent = it;

    // showing CGT percentage
    var capital = document.getElementById("capital").value;
    tax.textContent = capital;

    //showing commission
    if (total <= 50000) {
        comm = 0.004 * total;
    }
    else if (total > 50000 && total <= 500000) {
        comm = 0.0037 * total;
    }
    else if (total > 500000 && total <= 2000000) {
        comm = 0.0034 * total;
    }
    else if (total > 2000000 && total <= 10000000) {
        comm = 0.003 * total;
    }
    else {
        comm = 0.0027 * total;
    }

    commission.textContent = comm;

    //showing sebon fee
    let sebonFee = 0.00015 * total;
    sebon.textContent = sebonFee;

    //showing dpfee
    const dpfee = parseFloat(25);
    dp.textContent = dpfee;

    var costPerShareAfter = (total - comm - sebonFee - dpfee) / sq;


    if (wacc.checked) {
        let costPerShare = document.getElementById("buyPrice").value;
        if (costPerShareAfter > costPerShare) {
            var capitaltax = capital * (costPerShareAfter - costPerShare) * sq / 100;
        } else {
            var capitaltax = parseFloat(0);
        }


        cgt.textContent = capitaltax;
        var receivableAmount = (costPerShareAfter * sq) - capitaltax;
        amount.textContent = receivableAmount;

        var profit = receivableAmount - (costPerShare * sq);
        pl.textContent = profit;
    }
    else {
        //totalBuyingAmount
        var totalBuyingAmount = sq * pp;
        if (totalBuyingAmount <= 50000) {
            commi = 0.004 * totalBuyingAmount;
        }
        else if (totalBuyingAmount > 50000 && totalBuyingAmount <= 500000) {
            commi = 0.0037 * totalBuyingAmount;
        }
        else if (totalBuyingAmount > 500000 && totalBuyingAmount <= 2000000) {
            commi = 0.0034 * totalBuyingAmount;
        }
        else if (totalBuyingAmount > 2000000 && totalBuyingAmount <= 10000000) {
            commi = 0.003 * totalBuyingAmount;
        }
        else {
            commi = 0.0027 * totalBuyingAmount;
        }
        const dpFee = parseFloat(25);
        let sFee = 0.00015 * totalBuyingAmount;
        let totBuy = dpFee + totalBuyingAmount + commi + sFee;
        let costPerShare = totBuy / sq;

        //calculating capital gain tax
        // var capitalGainTax = document.getElementById("capital").value;
        if (costPerShareAfter > costPerShare) {
            var capitaltax = capital * (costPerShareAfter - costPerShare) * sq / 100;
        } else {
            var capitaltax = parseFloat(0);
        }


        cgt.textContent = capitaltax;
        var receivableAmount = (costPerShareAfter * sq) - capitaltax;
        amount.textContent = receivableAmount;

        var profit = receivableAmount - (costPerShare * sq);
        pl.textContent = profit;
    }



}



function Clear() {
    document.getElementById("price").value = "";
    document.getElementById("quantity").value = "";
    // var i = document.getElementById("price");
    // i.value="";
    // quantity.textContent="";
    // price.textContent="";
}

function navigate() {
    var selectElement = document.getElementById("type");
    var selectedValue = selectElement.value;

    // Check if a valid option is selected
    if (selectedValue) {
        // Redirect to the selected page
        window.location.href = selectedValue;
    }
}

function inst() {
    var sel = document.getElementById("inv");
    var cap = document.getElementById("capital");
    if (sel.value === "Institutional") {
        cap.innerHTML = '<option value="10">10%</option>';
    } else {
        cap.innerHTML = '<option value="5">5%</option><option value="7.5">7.5%</option>';
    }
    inst();
}