const shamsTIIDELab = () => {
  // a loop that goes from 1 to 200
  for (let i = 1; i <= 200; i++) {
    console.log(i);

    // to check if the number is divisible by 6 or 8
    let numDivisibleBySix = i % 6;
    let numDivisibleByEight = i % 8;

    // if the number is divisible by 6 and 8 print ShamsTIIDELAB
    if (numDivisibleBySix == 0 && numDivisibleByEight == 0) {
      console.log(`${i}/ 6 and ${i}/ 8  = ShamsTIIDELAB `);
    }

    // if the number is divisible by 6  then print shams
    else if (numDivisibleBySix == 0) {
      console.log(`${i} / 6 = Shams`);
    }

    // if the number is divisible by 8 then print TIIDELAB
    else if (numDivisibleByEight == 0) {
      console.log(`${i} / 8 = TIIDELAB`);
    } else {
      console.log(i);
    }
  }
};

shamsTIIDELab();
