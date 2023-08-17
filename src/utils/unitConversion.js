export const hectogramsToPounds = (num) => {
  const weightInPounds = Math.round(num * 0.2204623);
  return weightInPounds;
};

export const decimetersToFeetAndInches = (num) => {
  const totalInches = num * 3.937;
  let feet = Math.floor(totalInches / 12);
  let inches = Math.round(totalInches % 12);

  if (inches >= 12) {
    feet += Math.floor(inches / 12);
    inches %= 12;
  }

  return { feet, inches };
};
