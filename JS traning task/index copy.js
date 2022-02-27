const btnAddNewUser = document.querySelector("#generateBtn");
const mainContainerUser = document.querySelector("#mainContainerUser");
const profileImage = document.querySelector("img");
const userFirstNameInfo = document.querySelector("#userFirstName");
const userLastNameInfo = document.querySelector("#userLastName");
const nationalityInfo = document.querySelector("#nationalityInfo");
const registerDateInfo = document.querySelector("#regDateInfo");
const locationInfo = document.querySelector("#locationInfo");
const checkboxInput = document.querySelector("input");
const addrressContainer = document.querySelector("#addrresInfo");

const tableUserTag = document.querySelector("#table");

const userTableLocalStorage = document.querySelector("#tableUsersLocalStorage");

const url = "https://randomuser.me/api/";

let userArr = [];
let newArrUs = [];

const arrTenUsers = (first, last, nationality, registered) => {
    userArr.push({ first, last, nationality, registered });
    if (userArr.length === 11) {
        userArr.shift();
    }
};

checkboxInput.addEventListener("click", () => {
    if (checkboxInput) {
        addrressContainer.classList.toggle("hideData");
    }
});

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

btnAddNewUser.addEventListener("click", (e) => {
    e.preventDefault();
    // const tbodyUsersTag = document.querySelector("#tbodyUsersTag");
    tbodyUsersTag.remove();

    const errorMsg = document.querySelector("#error");
    const loader = document.querySelector("#loader");
    loader.classList.remove("hideData");
    errorMsg.classList.add("hideData");
    localStorage.clear();

    fetch(url, {})
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const dataFromServer = data.results;

            dataFromServer.forEach((user) => {
                if (userArr.length === 0) {
                }

                console.log(user);
                let firstName = `${user.name.first}`;
                let lastName = `${user.name.last}`;
                let pictureUrl = `${user.picture.large}`;
                let registerData = `${user.registered.date.slice(0, 10)}`;
                let nationality = `${user.nat}`;
                let locationAddress = `${user.location.street.name} ${user.location.street.number}
                ${user.location.postcode} ${user.location.city}  
                ${user.location.country}`;

                profileImage.src = pictureUrl;
                userFirstNameInfo.innerText = firstName;
                userLastNameInfo.innerText = lastName;
                nationalityInfo.innerText = nationality;
                registerDateInfo.innerText = registerData;
                locationInfo.innerText = locationAddress;

                loader.classList.add("hideData");
                mainContainerUser.classList.remove("hideData");

                arrTenUsers(firstName, lastName, nationality, registerData);
                setDatatoLocalStorage();
                displayUsersCreateTable(userArr);
                // getDataFromLocalStorage();
            });
        })
        .catch((data) => {
            console.log("blad wczytywania");
            loader.classList.add("hideData");
            errorMsg.classList.remove("hideData");
        });
});

const btnSortByLastName = document.querySelector("#btnSortByLastName");
const btnSortByRegDate = document.querySelector("#btnSortByRegDate");
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

const setDatatoLocalStorage = () => {
    const lsArray = [...userArr];
    window.localStorage.setItem("users", JSON.stringify(lsArray));
};

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
