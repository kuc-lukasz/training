// catch buttons
const btnAddNewUser = document.querySelector("#generateBtn");
const homeBtn = document.querySelector("#homeBtn");
const listBtn = document.querySelector("#listBtn");

const allProfileContainer = document.querySelector("#allProfileContainer");
const mainContainerUser = document.querySelector("#mainContainerUser");

const tableContainer = document.querySelector("#tableContainer");

const checkboxInput = document.querySelector("input");
const addrressContainer = document.querySelector("#addrresInfo");

const tableUserTag = document.querySelector("#table");

let userArr = [];
let userArrFromLocalStorage = [];

checkboxInput.addEventListener("click", () => {
    if (checkboxInput) {
        addrressContainer.classList.toggle("hideData");
    }
});

const singleUserOnTheScreen = (
    picURL,
    username,
    userLastName,
    nationality,
    registered,
    location
) => {
    const profileImage = document.querySelector("img");
    const userFirstNameInfo = document.querySelector("#userFirstName");
    const userLastNameInfo = document.querySelector("#userLastName");
    const nationalityInfo = document.querySelector("#nationalityInfo");
    const registerDateInfo = document.querySelector("#regDateInfo");
    const locationInfo = document.querySelector("#locationInfo");
    // const checkboxInput = document.querySelector("input");
    // const addrressContainer = document.querySelector("#addrresInfo");

    profileImage.src = picURL;
    userFirstNameInfo.innerText = username;
    userLastNameInfo.innerText = userLastName;
    nationalityInfo.innerText = nationality;
    registerDateInfo.innerText = registered;
    locationInfo.innerText = location;
};

// funkcje sortowania
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

btnSortByLastName.addEventListener("click", () => {
    tbodyUsersTag.remove();
    sortTriggerFunction();
    let sortArrayByLastName = [];

    sortArrayByLastName = [...userArr].sort((a, b) =>
        sortTrigger
            ? b.last.localeCompare(a.last)
            : a.last.localeCompare(b.last)
    );
    displayUsersCreateTable(sortArrayByLastName);
});

btnSortByRegDate.addEventListener("click", () => {
    tbodyUsersTag.remove();
    sortTriggerFunction();
    let sortArrayByReg = [];

    sortArrayByReg = [...userArr].sort((a, b) =>
        sortTrigger
            ? a.registered.localeCompare(b.registered)
            : b.registered.localeCompare(a.registered)
    );

    displayUsersCreateTable(sortArrayByReg);
});

// Local Storage - set and get Data
const setDataToLocalStorage = () => {
    const lsArray = [...userArr];
    window.localStorage.setItem("users", JSON.stringify(lsArray));
};

const getDataFromLocalStorage = () => {
    userArrFromLocalStorage = [];
    Object.keys(localStorage)
        .sort()
        .forEach((key) => {
            usersFromLS = JSON.parse(localStorage.getItem(key)).map((user) => {
                userArrFromLocalStorage.push({
                    first: user.first,
                    last: user.last,
                    nationality: user.nationality,
                    registered: user.registered,
                });
            });
        });
    if (userArr.length === 0) {
        userArr = [...userArrFromLocalStorage];
    }
};

//condition if ten user delete first one
const arrTenUsers = (first, last, nationality, registered) => {
    userArr.push({ first, last, nationality, registered });

    if (userArr.length === 11) {
        userArr.shift();
    }
};

//navigation
homeBtn.addEventListener("click", () => {
    tableContainer.classList.add("hideData");
    allProfileContainer.classList.remove("hideData");
});

listBtn.addEventListener("click", () => {
    allProfileContainer.classList.add("hideData");
    tableContainer.classList.remove("hideData");
});

const displayUsersCreateTable = (array) => {
    let tbodyUsersTag = document.createElement("tbody");
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
    tableContainer.classList.add("hideData");

    tbodyUsersTag.remove();

    const errorMsg = document.querySelector("#error");
    const loader = document.querySelector("#loader");
    loader.classList.remove("hideData");
    errorMsg.classList.add("hideData");

    fetch("https://randomuser.me/api/", {})
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const dataFromServer = data.results;

            dataFromServer.forEach((user) => {
                let pictureUrl = `${user.picture.large}`;
                let locationAddress = `${user.location.street.name} ${user.location.street.number}
                ${user.location.postcode} ${user.location.city}  
                ${user.location.country}`;

                mainContainerUser.classList.remove("hideData");
                singleUserOnTheScreen(
                    pictureUrl,
                    user.name.first,
                    user.name.last,
                    user.nat,
                    user.registered.date.slice(0, 10),
                    locationAddress
                );
                arrTenUsers(
                    user.name.first,
                    user.name.last,
                    user.nat,
                    user.registered.date.slice(0, 10)
                );
                setDataToLocalStorage();
                displayUsersCreateTable(userArr);
                loader.classList.add("hideData");
            });
        })
        .catch((data) => {
            console.log("blad wczytywania");
            loader.classList.add("hideData");
            errorMsg.classList.remove("hideData");
        });
});

getDataFromLocalStorage();

displayUsersCreateTable(userArr);
