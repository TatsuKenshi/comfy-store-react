export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number / 100);
  return newNumber;
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);

  if (type === "colors") {
    unique = unique.flat();

    return ["all", ...new Set(unique)];
  }

  return ["all", ...new Set(unique)].sort();
};

export const capitalizeTitle = (title) => {
  const array = title.split(" ");

  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
  }

  const newTitle = array.join(" ");

  return newTitle;
};
