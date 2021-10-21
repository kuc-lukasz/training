const renderList = (items) => {
    const list = document.createElement('ul');

    items.forEach(item => {
        const element = document.createElement('li');

        element.innerText = item;
        list.appendChild(element);
    });

    return list;
};