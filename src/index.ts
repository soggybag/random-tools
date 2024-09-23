// Some random helper functions

/**
 * Generates Random numbers
 * @return {Number}
 */

const random = (n: number): number => {
  return Math.floor(Math.random() * n)
};

/**
 * Generates Random numbers from min to max - 1
 * @param {Number} min
 * @param {Number} max
 * @return {Number}
 */

const randomRange = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min)) + min;
};

/**
 * Returns random true or false
 * @return {Bool}
 */

const randomBool = (): boolean => {
  return Math.random() < 0.5 ? true : false;
};

/**
 * Returns copy of array with elements randomized
 * @param {Array} Source Array
 * @return {Array} New Array
 */

// T extends Array<any>
const randomArray = <T extends Array<any>>(array: T): T[] => {
  const newArray: T[] = []
  const source: T[] = array.slice()
  while(source.length > 0) {
    newArray.push(source.splice(randomRange(0, source.length), 1)[0])
  }
  return newArray;
}

/**
 * Shuffles array in place. Uses the Fisher Yates method: https://en.wikipedia.org/wiki/Fisher–Yates_shuffle#The_modern_algorithm
 * @param {Array} a items An array containing the items.
 */
const shuffle = <T>(a: T[]): T[] => {
    let j: number
    let x: T
    let i: number
    for (i = a.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

/**
 * Returns a function that generates random numbers in The
 * range of 1 to DieSize.
 * @param {Int} dieSize
 * @return {Function} New Array
 */

const dieX = (n: number): () => number => {
  const dieSize = Math.floor(n);
  return (bonus = 0) => {
    return randomRange(1, dieSize + 1) + bonus;
  }
}

/**
 * Returns 'heads' or 'tails'
 * @returns String
 */

const flipCoin = (): string => {
  return randomBool() ? 'heads' : 'tails';
}

/**
 * Returns true or false
 * @returns Bool
 */

const flip = () => {
  return randomBool()
}

/**
 * Pick returns a random element from the 
 * provided array
 * @param {T[]} array 
 * @returns T
 */

const pick = <T>(arr: T[]) => {
  return arr[random(arr.length)]
}

export {
  random,
  randomRange,
  randomBool,
  randomArray,
  shuffle,
  dieX,
  flipCoin,
  flip,
  pick
}

export default random