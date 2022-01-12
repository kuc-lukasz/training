import { useState } from "react";
import React from "react";

const ControlledInputWithValidation = () => {
  //Zdefiniowanie stanu
  const [surename, setSurname] = useState("");
  const [nickname, setNickname] = useState("");

  const isFromInvalid = surename.length === 0;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFromInvalid) {
      console.log("nie moge wyslac formularza");
      //return konczy dzialanie submita
      return;
    }
    const firstname = event.target.name.value;
    const surename = event.target.surename.value;
    const nickname = event.target.nickname.value;
    setSurname("");
    setNickname("");

    console.log({ firstname, surename, nickname });
  };

  return (
    <>
      <h3>Kontrolowany formularz z walidacją</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" type="text"></input>
        </label>

        <label>
          Surname
          <input
            name="surename"
            type="text"
            placeholder="Wpisz nazwisko"
            value={surename}
            onChange={(event) => {
              console.log(event.target.value);
              setSurname(event.target.value);
            }}
          ></input>
          <div>{}</div>
        </label>

        <label>
          Nickname
          <input
            name="nickname"
            placeholder="nickname"
            onChange={(e) => {
              setNickname(e.target.value);
            }}
            value={nickname}
          ></input>
        </label>

        <button type="submit">Wyślij</button>
        <button
          onClick={(e) => {
            setSurname("");
          }}
        >
          Reset
        </button>
      </form>
      <p>Aktualna wartośc inputa: {surename}</p>
      <p>{surename === "Kuc" ? "Witam Mistrzu" : "Mistrz jest jeden"}</p>
      <p>Moja ksywka: {nickname}</p>
    </>
  );
};

export default ControlledInputWithValidation;
