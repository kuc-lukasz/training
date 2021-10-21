const fruits = ['orange', 'banana', 'apple', 'lemon', 'pineapple', 'grape'];

const random = (a, b) => {
    return Math.floor(Math.random() * (b - a)) + a;
};

const getData = () => {
    return fruits.slice(0, random(3, 6));
};

const renderList = (items) => {
    const list = document.createElement('ul');

    items.forEach(item => {
        const element = document.createElement('li');

        element.innerText = item;
        list.appendChild(element);
    });

    return list;
};

const main = () => {
    const data = getData();

    const list = renderList(data);

    document.body.appendChild(list);
};

// execute
main();