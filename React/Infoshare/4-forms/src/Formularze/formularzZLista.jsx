/**
 * 1. Zdefiniować liste
 * 2. Dodać inputa
 * 3. Zdefiniować stan dla inputa
 * 4. Podpiąć stan do inputa
 * 5. Podpiąć ustawianie stanu do inputa
 * 6. Wyświetlić listę
 * 7. Na podstawie stanu input, wyświetlić filtrową listę
 *
 */

import { useState } from "react";

const userList = [
  "Jozef",
  "Aga",
  "Konrad",
  "Marcin",
  "Alicja",
  "Kuba",
  "Łukasz",
  "Edyta",
  "Karolina",
];

export const FormularzZLista = () => {
  const [filter, setFilter] = useState();

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const FilteredList = userList.filter((imie) => {
    //niewrażliwy na wysokość liter .toLowerCase()
    return imie.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <>
      <p style={{ "font-weight": "700" }}>Tutaj bedzie filtrowana lista</p>
      <form>
        <label>
          <input
            name="wyszukiwarka"
            value={filter}
            onChange={handleFilterChange}
          ></input>
        </label>
        {/* <p>{filter}</p> */}
      </form>
      <div>
        {FilteredList.map((imie) => {
          return <>{<li>{imie}</li>}</>;
        })}
        <p>{FilteredList.length === 0 && "Nie ma takiego imienia"}</p>
      </div>
    </>
  );
};

export default FormularzZLista;
