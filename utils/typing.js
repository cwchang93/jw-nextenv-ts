/**
   * [\u0800-\u4E00]   (日文)
      [\u4E00-\u9fa5]    (中文)
      [\u9fa5-\uFFFF]    (韓文或其他)
      [\u0080-\uFFFF]   中日韓3byte以上的字符
      [\uFF00-\uFFFF]   全形符號
      [\uFE30-\uFFA0]   全形字母數字
      [^\uFF00-\uFFFF] 全形字
      [^\x00-\xff] 全形字
   */
// const emojiRegex = require("emoji-regex"); // 表情符號
// const emjR = emojiRegex();  // 包含表情符號&其他的
//   const regex = "^[\u4e00-\u9fa5\u0080-\uFFFF_a-zA-Z0-9]+$";

// symbol表示輸入符號的是否可以通過
//const emojiRegexText = require("emoji-regex/es2015/text.js");

export const checkInputType = (inputValue, symbol = false) => {
  const emojiRegexText = require("emoji-regex/es2015/text.js");
  const emjRT = emojiRegexText(); //emoji 包含不是表情符號的表情符號
  const fullWidthDigitandHalfDigit = /[\uFE30-\uFFA0]|[~!@#$%^&*()_+=\-`\[\]{}';:".,<>/?\|]/; // 有包含全形符號(含數字&英文) + 半形符號
  const fullDigitNoSymbol = /[\uFF10-\uFF19]|[\uFF41-\uFF5A]|[\uFF21-\uFF3A]/; // only全形英文&數字

  let flag = true;
  // let inputText = inputValue.trim();  覺得傳出來的值，直接去掉頭尾空白
  // Q: 那solomo 的trim()要怎麼加?
  console.log("text", inputText);
  if (emjRT.test(inputText)) flag = false;
  if (symbol) {
    // 表示品牌類別
    if (fullDigitNoSymbol.test(inputText)) flag = false;
  } else {
    // 表示basic類別
    if (fullWidthDigitandHalfDigit.test(inputText)) flag = false;
  }

  console.log(flag);
  return flag;
};
