const today = new Date();

const year = today.getFullYear();
const month = today.getMonth();
const day = today.getDate();

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const formattedDate = `${year}. ${months[month]}. ${day}.`;

export { year, formattedDate };
