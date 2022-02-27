const tableUserTag = document.querySelector("#table");
const btnSortByLastName = document.querySelector("#btnSortByLastName");
const btnSortByRegDate = document.querySelector("#btnSortByRegDate");

let userArr = [];
let newArrUs = [];

const url = "https://randomuser.me/api/";

const arrTenUsers = (first, last, nationality, registered) => {
    userArr.push({ first, last, nationality, registered });
    if (userArr.length === 11) {
        userArr.shift();
    }
};

const displayUsersCreateTable = (array) => {
    console.log(array);

    const tbodyUsersTag = document.createElement("tbody");
    tbodyUsersTag.setAttribute("id", "tbodyUsersTag");
    tableUserTag.appendChild(tbodyUsersTag);

    array.forEach((user) => {
        //tworze
        const trTagUsers = document.createElement("tr");
        let tableFirstName = document.createElement("td");
        let tableLastName = document.createElement("td");
        let tableNation = document.createElement("td");
        let tableRegistration = document.createElement("td");

        trTagUsers.setAttribute("id", "trTableUsers");
        //wrzucam
        tableFirstName.innerText = user.first;
        tableLastName.innerText = user.last;
        tableNation.innerText = user.nationality;
        tableRegistration.innerText = user.registered;
        //dodaje do DOM

        trTagUsers.appendChild(tableFirstName);
        trTagUsers.appendChild(tableLastName);
        trTagUsers.appendChild(tableNation);
        trTagUsers.appendChild(tableRegistration);
        tbodyUsersTag.appendChild(trTagUsers);
    });
};

let sortTrigger = true;
const sortTriggerFunction = () => {
    if (sortTrigger) {
        sortTrigger = false;
    } else {
        sortTrigger = true;
    }
};

const sortByLastName = () => {
    tbodyUsersTag.remove();
    sortTriggerFunction();
    let sortArrayByLastName = [];

    sortArrayByLastName = [...userArr].sort((a, b) =>
        sortTrigger
            ? b.last.localeCompare(a.last)
            : a.last.localeCompare(b.last)
    );
    displayUsersCreateTable(sortArrayByLastName);
    console.log(sortArrayByLastName);
};

const sortByRegistered = () => {
    tbodyUsersTag.remove();
    sortTriggerFunction();
    let sortArrayByReg = [];

    sortArrayByReg = [...userArr].sort((a, b) =>
        sortTrigger
            ? a.registered.localeCompare(b.registered)
            : b.registered.localeCompare(a.registered)
    );
    console.log(sortArrayByReg);
    displayUsersCreateTable(sortArrayByReg);
};

btnSortByLastName.addEventListener("click", () => {
    sortByLastName();
});

btnSortByRegDate.addEventListener("click", () => {
    sortByRegistered();
});

const getDataFromLocalStorage = () => {
    // userTableLocalStorage.innerHTML = "";
    newArrUs = [];
    Object.keys(localStorage)
        .sort()
        .forEach((key) => {
            usersFromLS = JSON.parse(localStorage.getItem(key)).map((user) => {
                newArrUs.push({
                    first: user.first,
                    last: user.last,
                    nationality: user.nationality,
                    registered: user.registered,
                });

                console.log(newArrUs);
            });
        });
    if (userArr.length === 0) {
        userArr = [...newArrUs];
    }
};

getDataFromLocalStorage();

displayUsersCreateTable(userArr);
