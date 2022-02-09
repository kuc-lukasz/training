import { useState } from "react";

const ControlledInput2 = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    // setSurname("");
    // setNickname("");

    // console.log({ firstname, surename, nickname });
  };
  const [formState, setFormState] = useState({
    // tak samo jak tutaj, nazywamy pola "name" w inputach
    name: "",
    surname: "",
    nickname: "",
  });

  const handleInputChange = (event) => {
    setFormState({
      //skopiowanie obecnych wartosci formstate
      ...formState,
      // tutaj wyszuka nam po polu NAME w każdym inpucie i zamieni na obecną wartośc inputa
      [event.target.name]: event.target.value,
    });
    console.log(event.target);
  };

  //Zdefiniowanie stanu

  return (
    <>
      <h3>Kontrolowany formularz ze stanem jako obiekt</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            name="name"
            type="text"
            value={formState.name}
            onChange={handleInputChange}
          ></input>
        </label>

        <label>
          Surname
          <input
            name="surname"
            type="text"
            placeholder="Wpisz nazwisko"
            value={formState.surname}
            onChange={handleInputChange}
          ></input>
        </label>

        <label>
          Nickname
          <input
            name="nickname"
            placeholder="nickname"
            onChange={handleInputChange}
            value={formState.nickname}
          ></input>
        </label>

        <button
          type="submit"
          onClick={(e) => {
            console.log({ formState });
          }}
        >
          Wyślij
        </button>
        <button
          onClick={(e) => {
            setFormState.surname("");
          }}
        >
          Reset
        </button>
      </form>
      <p>Moje imię: {formState.name}</p>
      <p>Aktualna wartośc inputa: {formState.surname}</p>
      <p>Moja ksywka: {formState.nickname}</p>
      <p>
        {formState.surname === "Kuc" ? "Witam Mistrzu" : "Mistrz jest jeden"}
      </p>
    </>
  );
};

export default ControlledInput2;
