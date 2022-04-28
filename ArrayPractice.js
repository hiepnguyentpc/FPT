function Exercise1(nums1, nums2) {
  let result = [];

  const hashmap = new Map();

  for (var i = 0; i < nums1.length; i++) {
    hashmap.set(nums1[i], i);
  }

  for (var i = 0; i < nums2.length; i++) {
    if (hashmap.has(nums2[i])) {
      result.push(nums2[i]);
    }
  }
  return result;
}

const numsEx1_1 = [1, 2, 3, 4, 5, 6];
const numsEx1_2 = [3, 4, 8, 9, 12];
console.log("Exercise 1 Answer: ");
console.log(Exercise1(numsEx1_1, numsEx1_2));

function Exercise2(nums) {
  nums.sort();
  let result = [];
  result.push(nums[nums.length - 1]);
  result.push(nums[nums.length - 2]);
  return result;
}
const numsEx2 = [1, 7, 9, 2, 5, 3, 8];
console.log("Exercise 2 Answer: ");
console.log(Exercise2(numsEx2));

function Exercise3(nums, target) {
  let result = [];
  const hashmap = new Map();
  for (var i = 0; i < nums.length; i++) {
    hashmap.set(nums[i], i);
  }

  for (var i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (hashmap.has(complement) & (hashmap[complement] != i)) {
      result.push(nums[i]);
      result.push(complement);
      result.push("_");
    }
  }
  return result;
}
const numsEx3 = [1, 7, 9, 2, 5, 3, 8];
const targetEx3 = 10;
console.log("Exercise 3 Answer: ");
console.log(Exercise3(numsEx3, targetEx3));

function Exercise4(nums) {
  const result = new Set();
  for (let i = 0; i < nums.length; i++) {
    result.add(nums[i]);
  }
  return result;
}
const numsEx4 = [1, 2, 3, 1, 2, 3, 4, 5, 6, 4];
console.log("Exercise 4 Answer: ");
console.log(Exercise4(numsEx4));

function Exercise5(nums1, nums2) {
  const set_1 = new Set();
  for (let i = 0; i < nums1.length; i++) {
    set_1.add(nums1[i]);
  }

  const set_2 = new Set();
  for (let i = 0; i < nums2.length; i++) {
    set_2.add(nums2[i]);
  }
  const arr1 = [...set_1];
  const arr2 = [...set_2];
  let result = Exercise1(arr1, arr2);
  return result;
}
const numsEx5_1 = [1, 2, 3, 4, 5, 6, 7, 9, 9, 8, 7, 7];
const numsEx5_2 = [3, 5, 9, 10, 88];
console.log("Exercise 5 Answer: ");
console.log(Exercise5(numsEx5_1, numsEx5_2));

function Exercise6(array) {
  const hashmap = new Map();
  for (let i = 0; i < array.length; i++) {
    if (!hashmap.has(array[i])) {
      hashmap.set(array[i], 1);
    } else {
      let value = hashmap.get(array[i]);
      value += 1;
      hashmap.set(array[i], value);
    }
  }
  return hashmap;
}
const arrayEx6 = ["face", "zalo", "face", "gmail", "zalo", "zalo"];
console.log("Exercise 6 Answer: ");
console.log(Exercise6(arrayEx6));

function Exercise7(array) {
  let audi = (e) => e.make == "audi";
  let audiObject = array.filter(audi);

  let ford = (e) => e.make == "ford";
  let fordObject = array.filter(ford);

  let carMap = new Map();
  carMap.set("audi:", audiObject);
  carMap.set("ford:", fordObject);
  return carMap;
}

const arrayEx7 = [
  { make: "audi", model: "r8", year: "2012" },
  { make: "audi", model: "rs5", year: "2013" },
  { make: "ford", model: "mustang", year: "2012" },
  { make: "ford", model: "fusion", year: "2015" },
  { make: "kia", model: "optima", year: "2012" },
];
console.log(Exercise7(arrayEx7));

function Exercise8() {
  const order = {
    cart: [
      { id: 1, name: "ao dai", amount: 5, price: 100000 },
      { id: 2, name: "ao coc", amount: 2, price: 200000 },
      { id: 3, name: "quan dai", amount: 3, price: 150000 },
      { id: 4, name: "quan coc", amount: 4, price: 130000 },
    ],
    total_money: 0,
    total_amount: 0,
  };

  const cart = order.cart;

  let initialObject = {};
  let total_amount_sum = cart.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.amount;
  }, 0);

  let total_price_sum = cart.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.price;
  }, 0);

  console.log(total_amount_sum);
  console.log(total_price_sum);
}
console.log("Exercise 8 Answer: ");
Exercise8();
