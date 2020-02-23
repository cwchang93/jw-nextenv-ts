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

// excludeSpecial("今天fdd】s")

const specialReg = /[\u3002][\uff1f][\uff01][\uff0c][\u3001][\uff1b][\uff1a][\u201c][\u201d][\u2018][\u2019][\uff08][\uff09][\u300a][\u300b][\u3008][\u3009][\u3010][\u3011][\u300e][\u300f][\u300c][\u300d][\u3014][\u3015][\u2026][\u2014][\uff5e]/


const specialCharacter = () => {

}

/**
 * 。	\u3002
？	\uff1f
！	\uff01
，	\uff0c
、	\u3001
；	\uff1b
：	\uff1a
“	\u201c
”	\u201d
‘	\u2018
’	\u2019
（	\uff08
）	\uff09
《	\u300a
》	\u300b
〈	\u3008
〉	\u3009
【	\u3010
】	\u3011
『	\u300e
』	\u300f
「	\u300c
」	\u300d
〔	\u3014
〕	\u3015
…	\u2026
—	\u2014
～	\uff5e
 * 
 */