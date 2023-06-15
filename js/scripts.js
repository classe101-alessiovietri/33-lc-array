const class101 = [
    'Christian',
    'Jane',
    'Pierpaolo',
    'Simone',
    'Andrea'
];

console.log('class101', class101, class101.length, typeof class101);

// console.log(class101[0]);
// console.log(class101[1]);
// console.log(class101[2]);
// console.log(class101[3]);
// console.log(class101[4]);

// let i = 0;
// console.log(i, class101[i]);
// i++;
// console.log(i, class101[i]);
// i++;
// console.log(i, class101[i]);
// i++;
// console.log(i, class101[i]);
// i++;
// console.log(i, class101[i]);

for (let j = 0; j < class101.length; j++) {
    console.log(j, class101[j]);
}

const emanueleEStatoBravo = true;
if (emanueleEStatoBravo) {
    class101.push('Emanuele');
    console.log('AGGIUNTO EMANUELE');
}

for (let j = 0; j < class101.length; j++) {
    console.log(j, class101[j]);
}

/* 
    -----------------------------------------------------------------------------
*/

console.log('-------------------------------');
console.log('SPESA');
console.log('-------------------------------');

const spesa = [
    'latte',
    'pane',
    'carne'
];

for (let i = 0; i < spesa.length; i++) {
    console.log('-', spesa[i]);

    const newLi = document.createElement('li');
    newLi.append(spesa[i]);

    document.getElementById('grocery-list').append(newLi);
}

const form = document.getElementById('new-product-form');

form.addEventListener('submit',
    function(event) {
        event.preventDefault();
        console.log('Form sottomesso');

        const newLi = document.createElement('li');
        // const productInput = document.getElementById('product');
        // newLi.append(productInput.value);
        newLi.append(document.getElementById('product').value);
        document.getElementById('product').value = '';

        document.getElementById('grocery-list').append(newLi);

        // Tutta la lista della spesa
        console.log(spesa);
    }
);