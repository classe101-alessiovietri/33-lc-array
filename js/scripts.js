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

        const newProductInput = document.getElementById('product');
        console.log('NUOVO PRODOTTO:', newProductInput.value);

        // Aggiungo il nuovo prodotto nella lista della spesa (nell'array)
        spesa.push(newProductInput.value);

        newProductInput.value = '';

        // Tutta la lista della spesa
        console.log(spesa);

        document.getElementById('grocery-list').innerHTML = '';
        for (let i = 0; i < spesa.length; i++) {
            console.log('-', spesa[i]);
        
            const newLi = document.createElement('li');
            newLi.append(spesa[i]);
        
            document.getElementById('grocery-list').append(newLi);
        }
    }
);

/* 
    -----------------------------------------------------------------------------
*/

console.log('-------------------------------');
console.log('NUMERI PARI');
console.log('Voglio stampare solo i numeri pari');
console.log('-------------------------------');

const numbers = [3, 46, 98, 123, 52, 54, 78, 76, 91, 102];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        console.log(i, numbers[i], 'è pari');
    }
    // else {
    //     console.log(i, numbers[i], 'è dispari');
    // }
}

/* 
    -----------------------------------------------------------------------------
*/

console.log('-------------------------------');
console.log('STRINGHE LUNGHE');
console.log('Voglio stampare solo le stringhe lunghe ALMENO 3 caratteri');
console.log('-------------------------------');

const strings = [
    'a',
    'ab',
    'abc',
    'gatto',
    'fra',
    'aeroplano',
    '12',
    'yo'
];

for (let i = 0; i < strings.length; i++) {
    if (strings[i].length >= 3) {
        console.log(i, strings[i]);
    }
}

/* 
    -----------------------------------------------------------------------------
*/

console.log('-------------------------------');
console.log('STRINGHE con la o');
console.log('Voglio stampare solo le stringhe che contengono la o');
console.log('-------------------------------');

const stringsTwo = [
    'a',
    'ab',
    'abc',
    'gatto',
    'fra',
    'aeroplano',
    '12',
    'yo'
];

for (let i = 0; i < stringsTwo.length; i++) {
    if (stringsTwo[i].includes('o')) {
        console.log(i, stringsTwo[i]);
    }
}