let products = [
    'Canon Kit Lens 15-55mm',
    'Nikon 3100',
    'Samsung NX300',
    'Canon EOS 80D',
    'Sony Alpha A7s',
    'Sony NX 300M',
    'Panasonic Lumix GH4',
    'Panasonic Lumix DC-GH5',
    'Xiaomi Y1-M1',
    'Fujifilm X-A10',
    'Canon DSLR Rebel T7',
    'Canon DSLR EOS 2000D',
    'Sony A7ii',
    'Sony A6500 Mirrorless',
    'Sony Alpha A7r III',
    'Sony NEX-3N',
    'Nikon V1',
    'Sony NEX-F3',
    'Sony NEX-5',
    'Olympus PEN E-PL6'
];

let product_price = [
    500.00,
    200.00,
    750.00,
    2000.00,
    1600.00,
    300.00,
    800.00,
    5000.00,
    500.00,
    600.00,
    1200.00,
    1200.00,
    2000.00,
    2000.00,
    5000.00,
    750.00,
    200.00,
    800.00,
    900.00,
    750.00,
];

function productPrice(array_name,array_price) {

    for(product = 0; product < array_name.length; product++) {
        if((array_price[product] % 2) == 0){
            array_price[product] = array_price[product] * 2;
        }else if((array_price[product] % 2) !== 0){
            array_price[product] = (array_price[product] / 2);
        }
        console.log(`The price of ${array_name[product]} is ${array_price[product]}`)
    }  
};
productPrice(products,product_price);
 