const binary = '11111111';

const binaryToDecimal = (binary) => {
  let total = 0;
  let exponential = 0;

  for (let i = binary.length; i > 0; i--) {
    const position = i - 1;
    const number = +binary[position];

    const sum = number * Math.pow(2, exponential);

    total += sum;

    exponential++;
  }

  return total;
};

console.log(binaryToDecimal(binary));
