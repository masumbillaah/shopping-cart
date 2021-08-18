function updateProductNumber(product, price, isIncrease){
    const productInput = document.getElementById(product + '-count')
    let productNumber = productInput.value;
    if(isIncrease == true){
        productNumber = parseInt(productNumber)  + 1;
    }
    else if(productNumber > 0) {
         productNumber = parseInt(productNumber)  - 1;
    }

    productInput.value = productNumber;
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    calculateTotal();
}

function getInputValue(product){
    const productInput = document.getElementById(product + '-count')
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal (){
const phoneTotal = getInputValue('phone') * 1219;
const caseTotal = getInputValue('case') * 59;
const subTotal = phoneTotal + caseTotal;
const taxAmount = subTotal / 10;
const totalPrice = subTotal + taxAmount;

 document.getElementById('sub-total').innerText = subTotal
 document.getElementById('tax-amount').innerText = taxAmount
 document.getElementById('total-price').innerText = totalPrice
 };
 
/* Phone Part */
document.getElementById('phone-increase').addEventListener('click',function(){
    updateProductNumber('phone',1219,true);
});

document.getElementById('phone-decrease').addEventListener('click',function(){
    updateProductNumber('phone',1219,false);
});

/* Case Part */
document.getElementById('case-increase').addEventListener('click',function(){
    updateProductNumber('case', 59, true);
});
document.getElementById('case-decrease').addEventListener('click',function(){
    updateProductNumber('case', 59, false);
});

document.getElementById('checkout-btn').addEventListener('click', function(){
    window.location.href ='boss/boss.html'
})
