export const formattedPrice = (number) => {
  const data = number.toString().split("");
  return data
    .reverse()
    .map((el, index) => (index % 3 !== 2 ? el : ` ${el}`))
    .reverse()
    .join("");
};

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};


export   const filteredSeats = (arr) => {
  return arr.filter((item) => item.available === true);
};


export   const findWagon = (arr, value) => {
  console.log(arr, value);
  return arr.find((item) => item.coach.class_type === value);
};