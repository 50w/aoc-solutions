# Advent of Code Solver
This project aims to be web app capable of solving all the AoC problems we have been able to solve. If you use this you are a cheater, so be warned!

### Contributing
You are able to run this locally with command `yarn start` to test out your own solutions.

It's a pretty simple <b>2 step process</b> to submit a JS solution for a problem: 

1. Go to the `src/solutions/{YEAR}/{DAY}/{PART}.js` directory and look for the year and day you want to submit (you may need to make the directory if it doesnt exist yet). All you need is to have a default export which takes the sample input and returns the answer, for example: 

```ts 
src/solutions/2019/day_1/part_1.js

function getFuelArray(input) {
    return input.map(el => {
        return ((Number(el) / 3) | 0) - 2
    })
}

export default function run(input) {
    return getFuelArray(input.split(" ")).reduce((el, acc) => acc + el, 0)
}
```

2. Go to `src/solutions/solutions.ts` and add the appropriate meta data to the JSON blob. `{YEAR}.{SOLUTIONS}.{DAY}.{PART}`

Note: AoC problems normally use `\n` when they provide input but when you paste that into a `<input/>` the newlines are converted to spaces. Make sure your solution works when you paste the input into the text field.


