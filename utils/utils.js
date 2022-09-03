export function getBetData(data, searchName) {
    return data.find(item => item.name === searchName ? true : false)
}

export function getRandomData(data) {
    return data[Math.floor(Math.random() * data.length)];
}