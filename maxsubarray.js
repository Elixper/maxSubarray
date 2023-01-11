maxSequence = (arr) => {
let best_sum = 0;

if(arr.length === 0) {
  return 0
}

let current_sum = 0;
arr.forEach(el=> {
  current_sum = Math.max(0,current_sum+el);
  best_sum = Math.max(best_sum,current_sum)
})
return best_sum
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
//should be 6: [4, -1, 2, 1]

