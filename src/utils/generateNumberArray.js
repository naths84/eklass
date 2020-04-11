const generateNumberArray = (num = 10) => {
  let numberArray = new Array(10);
  for (let i = 0; i < numberArray.length; i++) {
    numberArray[i] = i.toString();
  }
  return numberArray;
};

export default generateNumberArray;