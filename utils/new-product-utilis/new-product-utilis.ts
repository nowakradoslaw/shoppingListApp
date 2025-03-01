export const formatDate = (inputDate: Date) => {
  const year = inputDate.getFullYear();
  const month = inputDate.getMonth() + 1; // Adding 1 to get the correct month (1 to 12)
  const day = inputDate.getDate();
  return `${day}-${month}-${year}`; // Return the formatted date string
};
