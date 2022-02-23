const button = document.querySelector("button");

const url = "https://randomuser.me/api/";

const userArr = [];

const arrTenUsers = (user, nationality, registerdata) => {
    userArr.push({ user, nationality, registerdata });
    if (userArr.length === 11) {
        userArr.shift();
    }
    console.log(userArr);
};

button.addEventListener("click", () => {
    fetch(url, {})
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const dataFromServer = data.results;
            dataFromServer.map((user) => {
                console.log(user);
                let userName = `${user.name.first} ${user.name.last} `;
                let pictureUrl = `${user.picture.thumbnail}`;
                let registerData = `${user.registered.date}`;
                let nationality = `${user.nat}`;
                let locationAddress = `${user.location.street.name} ${user.location.street.number}
                ${user.location.postcode} ${user.location.city}  
                ${user.location.country}`;

                console.log(userName);
                console.log(pictureUrl);
                console.log(registerData);
                console.log(nationality);
                console.log(locationAddress);

                arrTenUsers(userName, nationality, registerData);
            });
        })
        .catch((data) => {
            console.log("nie działa");
        });
});
