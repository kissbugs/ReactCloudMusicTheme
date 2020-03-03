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

export const getSongUrl = id => {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
};

export const formatAudioTime = time => {
  if (!time) {
    return "00:00";
  }
  let min = `${Math.floor(time / 60)}`;
  let sec = `${Math.floor(time - min * 60)}`;
  let formattedTime = `${min ? min.padStart(2, "0") : "00"}:${
    sec ? sec.padStart(2, "0") : "00"
    }`;
  return formattedTime;
}