export const hectogramsToPounds = (num) => {
  const weightInPounds = Math.round(num * 0.2204623);
  return weightInPounds;
};

export const decimetersToFeetAndInches = (num) => {
  const totalInches = num * 3.937;
  const feet = Math.floor(totalInches / 12);
  const inches = Math.round(totalInches % 12);
  return { feet, inches };
};
