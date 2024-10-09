const formateDate = (date) => {
  const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const timeOptions = {
    hour: '2-digit', 
    minute: '2-digit',
  };
  const year = new Date(date).toLocaleString('ru-RU', dateOptions);
  const time = new Date(date).toLocaleTimeString('ru-RU', timeOptions);
  return `${year} в ${time}`;
};

export default formateDate;
