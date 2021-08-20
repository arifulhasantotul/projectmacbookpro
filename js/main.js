function getPrice(product,isMaximum,isMedium) {
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
}

// 8GB memory
document.getElementById('memory_8').addEventListener('click', function () {
    
    getPrice('memory', false);
});
// 16GB memory 
document.getElementById('memory_16').addEventListener('click', function () {
    
    getPrice('memory', true);
});

// 256GB SSD 
document.getElementById('ssd_256').addEventListener('click', function () {
    
    getPrice('storage', false);
});
// 512GB SSD
document.getElementById('ssd_512').addEventListener('click', function () {
    
    getPrice('storage', false, true);
});
// 1TB SSD 
document.getElementById('ssd_1tb').addEventListener('click', function () {
    
    getPrice('storage', true);
});
