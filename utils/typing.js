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

export const checkInputType = (inputText, symbol = false) => {
  const emojiRegexText = require("emoji-regex/es2015/text.js");
  let flag = true; //
  const emjRT = emojiRegexText(); //emoji 包含不是表情符號的表情符號
  const jpRegex = /([\u0800-\u4E00])/; //日語的regex
  const fullWidthDigit = /[\uFE30-\uFFA0]/;
  // alert(fullWidthDigit.test(inputText));
  if (emjRT.test(inputText)) {
    flag = false;
  }
  if (fullWidthDigit.test(inputText)) flag = false;

  // if (!symbol) {
  //   .test()
  // }

  // if (symbol && )

  // 日語要另外獨立出來
  // if (jpRegex.test(inputText)) flag = true;

  //   console.log("flag", flag);
  if (inputText.trim() === "") return;
  console.log(flag);
  return flag;
};
