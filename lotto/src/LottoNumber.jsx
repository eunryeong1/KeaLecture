import React from "react";

function generateRandomArray() {
  let randomArray = [];
  while (randomArray.length < 7) {
    const randomNumber = Math.floor(Math.random() * 45) + 1;
    if (!randomArray.includes(randomNumber)) {
      randomArray.push(randomNumber);
    }
  }
  return randomArray;
}

function RandomNumberGenerator() {
  const [randomNumbers, setRandomNumbers] = React.useState([]);

  const handleGenerateNumbers = () => {
    const newRandomNumbers = generateRandomArray();
    setRandomNumbers(newRandomNumbers);
  };

  return (
    <div>
      <button onClick={handleGenerateNumbers}>Generate Numbers</button>
      <ul>
        {randomNumbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </div>
  );
}

export default RandomNumberGenerator;