const UnControlledInput = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const firstname = event.target.name.value;
    console.log(firstname);

    return <p>{firstname}</p>;
  };

  return (
    <>
      <h3>Niekontrolowany formularz</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" type="text"></input>
        </label>
        <button type="submit">Wyślij</button>
      </form>
      <p></p>
    </>
  );
};

export default UnControlledInput;

// (event) => {
//           event.preventDefault();
//           console.log(event.target.name.value);
//         }
