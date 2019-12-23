function getFuelArray(input) {
    return input.map(el => {
        return ((Number(el) / 3) | 0) - 2
    })
}

export default function run(input) {
    return getFuelArray(input.split(" ")).reduce((el, acc) => acc + el, 0)
}

