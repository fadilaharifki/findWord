let check = 'BCA'
let count = 0
let newCount = 0
let result = ''
let temp = ''

for (let i = 0; i < check.length; i++) {
    for (let j = 0; j < check.length; j++) {
        if (check[i] === check[j]) {
            console.log(check[j]);
            newCount += 1
            temp = check[j]
        }

        if (j === check.length - 1) {
            if (count < newCount) {
                count = newCount
                result = temp
                newCount = 0
            } else if (count >= newCount) {
                count = count
                newCount = 0
            }
        }
    }
}

console.log(count, result, '>>>>>>>');
