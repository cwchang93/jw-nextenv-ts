const checkInputType = (inputText, symbol = false) => {
    // const emjRT = emojiTextRegex(); // emoji 包含不是表情符號的表情符號
    const fullWidthDigitandHalfDigit = /[\uFE30-\uFFA0]|[~!@#$%^&*()_+=\-`\[\]{}';:".,<>/?\|]/; // 有包含全形符號(含數字&英文) + 半形符號
    const fullDigitNoSymbol = /[\uFF10-\uFF19]|[\uFF41-\uFF5A]|[\uFF21-\uFF3A]/; // only全形英文&數字

    let flag = true;
    // if (emjRT.test(inputText)) flag = false;
    if (symbol) {
        // 表示品牌類別
        // console.log('flag', flag)
        if (fullDigitNoSymbol.test(inputText)) flag = false;
        // console.log('flag2', flag)
    } else {
        // 表示basic類別
        if (fullWidthDigitandHalfDigit.test(inputText)) flag = false;
        // 新增(濾掉特殊字元) except中文
        const chjpRex = /[\u4E00-\u9FFF][\u0800-\u4E00]/
        const specialTest = /\W/
        const inputArr = inputText.split("");
        const filterArr = inputArr.filter((ele) => {
            return chjpRex.test(ele) === false;
        })
        const specialCharacter = filterArr.filter((ele) => {
            return specialTest.test(ele.trim()) // 出來的arr可能有空白
        })
        if (specialCharacter.length > 0) flag = false;
        // 新增end
    }
    return flag;
};

// checkInputType("今天fdds")