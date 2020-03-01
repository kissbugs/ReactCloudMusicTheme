export const playCount = count => {
  return `${Math.floor(count / 10000)}万`
};


export const debounce = (func, delay = 500) => {
  let timer;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.apply(this, args);
      clearTimeout(timer);
    }, delay);
  };
};
