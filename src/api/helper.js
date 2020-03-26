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

/**
 * @param {* 源字符串} str 
 * @param {* 截取长度} len 
 */
export const sliceStringText = (str, len) => {
  let str_length = 0;
  let str_len = 0;
  let str_cut = new String();
  str_len = str.length;
  for (var i = 0; i < str_len; i++) {
    a = str.charAt(i);
    str_length++;
    if (escape(a).length > 4) {
      //中文字符的长度经编码之后大于4
      str_length++;
    }
    str_cut = str_cut.concat(a);
    if (str_length >= len) {
      str_cut = str_cut.concat("...");
      return str_cut;
    }
  }
  //如果给定字符串小于指定长度，则返回源字符串；
  if (str_length < len) {
    return str;
  }
}