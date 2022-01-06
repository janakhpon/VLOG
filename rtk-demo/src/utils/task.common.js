export const URL = `http://localhost:3001/api/v1/todos`

const isFloat = (n) => {
    return Number(n) === n && n % 1 !== 0;
}

export const calculatePagination = (count) => {
    let condition = 0
    if (count !== 0) {
        if (isFloat(count / 5)) {
            let x = count / 5;
            let decimals = x - Math.floor(x);
            condition = x - decimals + 1;
        } else {
            condition = count / 5;
        }
    }
    return condition
}

export const days = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"]