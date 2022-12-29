const x = '';
// FALSE

const y = 0;
console.log(!!x);
// FALSE

const a = null;
const b = undefined;
console.log(!!b);
// FALSE

const list = [];
const object = {};
console.log(!!object)

if (list.length === 0) {
    console.log(list)
}