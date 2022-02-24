const button = document.querySelector("#generateBtn");
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

// let tableUserName = document.querySelector("#tableUserName");
// let tableNation = document.querySelector("#tableNation");
// let tableRegistration = document.querySelector("#tableRegistration");

const url = "https://randomuser.me/api/";

const userArr = [];

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

const addUserToTable = () => {
    console.log(userArr);

    const tbodyUsersTag = document.createElement("tbody");
    tbodyUsersTag.setAttribute("id", "tbodyUsersTag");
    tableUserTag.appendChild(tbodyUsersTag);

    userArr.forEach((user) => {
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

button.addEventListener("click", (e) => {
    e.preventDefault();
    const tbodyUsersTag = document.querySelector("#tbodyUsersTag");
    tbodyUsersTag.remove();
    const errorMsg = document.querySelector("#error");
    const loader = document.querySelector("#loader");
    loader.classList.remove("hideData");
    errorMsg.classList.add("hideData");

    fetch(url, {})
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const dataFromServer = data.results;
            dataFromServer.forEach((user) => {
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

                arrTenUsers(firstName, lastName, nationality, registerData);

                loader.classList.add("hideData");
                mainContainerUser.classList.remove("hideData");
                console.log(firstName, lastName);
                addUserToTable();
            });
        })
        .catch((data) => {
            console.log("blad wczytywania");
            loader.classList.add("hideData");
            errorMsg.classList.remove("hideData");
        });
});
