const menu = [
    {
        name: 'pancake',
        category: 'breakfast',
    },
    {
        name: 'burger',
        category: 'lunch',
    },
    {
        name: 'steak',
        category: 'lunch',
    },
    {
        name: 'bacon',
        category: 'breakfast',
    },
    {
        name: 'eags',
        category: 'breakfast',
    },
    {
        name: 'beef kichuri',
        category: 'dinner',
    },
    {
        name: 'morag polao',
        category: 'lunch',
    },
    {
        name: 'fish fry',
        category: 'dinner',
    }
];

const categories =  ['all', ...new Set(menu.map(item => item.category))];
console.log( categories);
const target = document.querySelector('.result');
target.innerHTML = categories.map(c => {
    return `<button class="btn">${c}</button>`;
}).join('');

