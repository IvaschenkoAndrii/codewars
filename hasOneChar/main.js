function hasOneChar(s) {
    return new Set([...s]).size===1
}

console.log(hasOneChar('aaaaa'));