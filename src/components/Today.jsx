const Today = () => {
  const today = () => {
    const year = new Date().getFullYear() + "-";
    const month = new Date().getMonth() * 1 + 1 + "-";
    const date = new Date().getDate();
    return year + month + date;
  };
  return { today };
};

export default Today;
