const excludeSpecial = (input) => {
    // 中日文
    const chjpRex = /[\u4E00-\u9FFF]|[\u3040-\u309f]|[\u30a0-\u30ff]|[\uff66-\uff9f]|[\u4e00-\u9faf]/
    const specialTest = /\W/
    const inputArr = input.split("");
    const filterArr = inputArr.filter((ele) => {
        return chjpRex.test(ele) === false;
    })
    console.log('filterArr', filterArr)
    const specialCharacter = filterArr.filter((ele) => {
        return specialTest.test(ele)
    })
    // const filter = 
    console.log(specialCharacter)
    // if (specialCharacter.length < 1) return false
}

excludeSpecial("今天fdd】s")