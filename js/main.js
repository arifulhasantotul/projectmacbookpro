// get memory and storage price 
function getPrice(product, isMaximum, isMedium) {
    
    // access text id
    const textId = document.getElementById('extra_' + product);
    // get inner text 
    const text = textId.innerText;
    // convert into price 
    let price = parseFloat(text);

    if (isMaximum == true) {
        price = 180;
    } else {
        price = 0;
    }
    if (isMedium == true) {
        price = 100;
    }
    textId.innerText = price;

    // price adding function 
    getTotalPrice();
}

// get delivery cost 
function getDeliveryCost(isFast) {
    
    // access text id 
    const textId = document.getElementById('extra_delivery');
    // get inner text 
    const text = textId.innerText;
    // convert into price 
    let price = parseFloat(text);

    if (isFast == true) {
        price = 20;
    } else {
        price = 0;
    }

    textId.innerText = price;

    // cost adding function 
    getTotalPrice();
}
// get total price 
function getTotalPrice() {
    
    // discount price 
    const discountPrice = document.getElementById('discount_price');
    // total price 
    const totalPrice = document.getElementById('total_price');
    // best price
    const bestPrice = parseFloat(document.getElementById('normal_price').innerText);
    // extra memory price 
    const memoryCost = parseFloat(document.getElementById('extra_memory').innerText);
    // extra storage cost 
    const storageCost = parseFloat(document.getElementById('extra_storage').innerText);
    // delivery charge 
    const deliveryCost = parseFloat(document.getElementById('extra_delivery').innerText);

    // sum price
    const totalCost = bestPrice + memoryCost + storageCost + deliveryCost;

    totalPrice.innerText = totalCost;
    discountPrice.innerText = totalCost;

}
function getDiscount() {

    // total price 
    const totalPrice = parseFloat(document.getElementById('total_price').innerText);
    // get code 
    const codeInput = document.getElementById('discount_input');
    // code value 
    const codeValue = codeInput.value;
    // discount price id 
    const discountPriceId = document.getElementById('discount_price');
    let discountPrice = discountPriceId.innerText;
    if (codeValue.toLowerCase() == 'stevekaku') {
        // 20% discount 
        discountPrice = totalPrice - ((totalPrice * 20) / 100);
    }

    discountPriceId.innerText = discountPrice;
    codeInput.value = '';

}
// 8GB memory
document.getElementById('memory_8').addEventListener('click', function () {
    
    getPrice('memory', false, false);
});
// 16GB memory 
document.getElementById('memory_16').addEventListener('click', function () {
    
    getPrice('memory', true, false);
});

// 256GB SSD 
document.getElementById('ssd_256').addEventListener('click', function () {
    
    getPrice('storage', false, false);
});
// 512GB SSD
document.getElementById('ssd_512').addEventListener('click', function () {
    
    getPrice('storage', false, true);
});
// 1TB SSD 
document.getElementById('ssd_1tb').addEventListener('click', function () {
    
    getPrice('storage', true, false);
});
// free delivery 
document.getElementById('delivery_late').addEventListener('click', function () {
    
    getDeliveryCost(false);
});
// fast delivery 
document.getElementById('delivery_fast').addEventListener('click', function () {
    
    getDeliveryCost(true);
});

// discount button 
document.getElementById('discount_button').addEventListener('click', function () {
    
    getDiscount();
});