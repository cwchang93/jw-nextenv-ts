const checkInputType = (inputText, symbol = false, allowComma = false) => {
    const emjRT = emojiTextRegex(); // emoji 包含不是表情符號的表情符號
    const fullWidthDigitandHalfDigit = /[\uFE30-\uFFA0]|[~!@#$%^&*()_+=\-`\[\]{}';:".,<>/?\|]/; // 有包含全形符號(含數字&英文) + 半形符號
    const fullDigitNoSymbol = /[\uFF10-\uFF19]|[\uFF41-\uFF5A]|[\uFF21-\uFF3A]/; // only全形英文&數字

    const fullWidthDigitandHalfDigitNoComma = /[\uFE30-\uFFA0]^[\u002C]|[~!@#$%^&*()_+=\-`\[\]{}';:".<>/?\|]/;

    /** 0223 新增鍵盤符號 */
    const keyBoardRegex = specialWordRegex();
    const otherKeyBoardRegex = /[\u32A3|\u02CD|\u33D2|\u33D1|\u222B|\u33D5|\u339C|\u339D|\u339E|\u33CE|\u33A1|\u338E|\u338F|\u33C4]/
    /** 0223 新增鍵盤符號~ */
    let flag = true;
    // if (emjRT.test(inputText)) flag = false;
    if (inputText.match(emjRT)) flag = false;
    if (symbol) {
        // 表示品牌類別
        if (inputText.match(fullDigitNoSymbol)) flag = false;
    } else {
        // 表示basic類別

        if (allowComma) { // 新增給加標籤的function
            if (inputText.match(fullWidthDigitandHalfDigitNoComma)) flag = false;
        } else {

            if (inputText.match(fullWidthDigitandHalfDigit)) flag = false;
        }

        /** 0223 新增鍵盤符號 */
        if (inputText.match(keyBoardRegex)) flag = false;
        if (inputText.match(otherKeyBoardRegex)) flag = false;
        /** 0223 新增鍵盤符號~ */

    }
    return flag;
};