const TIME_SHOW = (msDate, normalDate) => {
  const CURR_TIME = new Date().getTime();
  const FINAL_TIME = normalDate.match(/\d+:\d+:\d+/g);
  if ((CURR_TIME - msDate) <= 300000) return `Just now at ${FINAL_TIME}`;
  if ((CURR_TIME - msDate) <= 86400000 && (CURR_TIME - msDate) > 300000) return `Today at ${FINAL_TIME}`;
  return normalDate;
};

export default TIME_SHOW;
