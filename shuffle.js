function shuffle(arr = []) {
    const copyArr = [...arr]
    const shuffledArr = []
    while (copyArr.length) {
        const idx = Math.floor(Math.random() * copyArr.length)
        shuffledArr.push(copyArr.splice(idx, 1)[0])
    }
    return shuffledArr
}

function shuffle2(arr = []) {
    for (let lastIdx = arr.length; lastIdx > 0; lastIdx--) {
        const idx = Math.floor(Math.random() * lastIdx)
        arr.push(arr.splice(idx, 1)[0])
    }
    return arr
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
console.log(shuffle2(arr))
