const main = () => {
    const data = getData();

    const list = renderList(data);

    document.body.appendChild(list);
};

main();

console.log(fruits[4])