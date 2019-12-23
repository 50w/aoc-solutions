
const part2Fuel = (modules) => {
    const getFuelArray = (arr) => {
        return arr.map(el => {
            return Math.max(((Number(el) / 3) | 0) - 2, 0)
        })
    }

    let fuelArray = getFuelArray(modules)
    let totalFuel = 0

    while(fuelArray.reduce(function(a,b) { return a + b }) > 0) {
        totalFuel += fuelArray.reduce(function(a,b) { return a + b });
        fuelArray = getFuelArray(fuelArray)
    }

    return totalFuel
}


export default function run(input) {
    return part2Fuel(input.split(" "))
}