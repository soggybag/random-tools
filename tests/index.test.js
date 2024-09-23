// import { 
//   random, 
//   randomRange, 
//   randomArray, 
//   randomBool, 
//   dieX, 
//   shuffle, 
//   pick 
// } from '../dist/bundle.esm'

const { 
  random, 
  randomRange, 
  randomArray, 
  randomBool, 
  dieX, 
  shuffle, 
  pick
} = require('../dist/bundle.umd')

// ----------------------------------------------------
describe('#random', () => {
    test('should return a number', () => {
      const n = random(6)
      expect(typeof n).toBe('number')
    });

    test('should return a random number between 0 and 1', () => {
      const maxTestValue = 10
      for (let i = 0; i < 100; i += 1) {
        const n = random(maxTestValue)
        expect(typeof n).toBe('number')
        expect(n).toBeGreaterThanOrEqual(0)
        expect(n).toBeLessThanOrEqual(maxTestValue)
      }
    });
});

// ----------------------------------------------------
describe('#randomRange', () => {
  test('should return an Integer', () => {
    const minValue = 3
    const maxValue = 35
    const n = randomRange(minValue, maxValue)
    expect(typeof n).toBe('number')
    expect(n).toBeGreaterThanOrEqual(minValue)
    expect(n).toBeLessThanOrEqual(maxValue)
  });
});

// ----------------------------------------------------
describe('#randomBool', () => {
    test('should return a bool', () => {
      const n = randomBool()
      expect(typeof n).toBe('boolean')
    });

    test('should return true and false', () => {
      let isTrue = false
      let isFalse = true
      for (let i = 0; i < 100; i += 1) {
        if (randomBool()) { isTrue = true }
        if (!randomBool()) { isFalse = false }
      }

      expect(isTrue).toBe(true)
      expect(isFalse).toBe(false)
    });
});

// ----------------------------------------------------
describe('#randomArray', () => {
    const source = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
    const array = source.slice();

    const shuffledArray = randomArray(array)

    test('should return an array', () => {
      expect(typeof shuffledArray).toBe('object')
    });

    test('should have same number of items', () => {
      expect(shuffledArray.length).toBe(array.length)
    });

    test('should not have reference equality with source array', () => {
      expect(shuffledArray).not.toBe(array);
    });

    test('should not modify source array', function() {
      for (let i = 0; i < array.length; i += 1) {
        expect(array[i]).toBe(source[i]);
      }
    });
});


// ----------------------------------------------------
describe('#shuffleArray', () => {
    const source = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
    const array = source.slice();
    const shuffledArray = shuffle(array);

    test('should return an array', () => {
      expect(typeof shuffledArray).toBe('object')
    });

    test('should have same number of items', () => {
      expect(shuffledArray.length).toBe(array.length)
    });

    test('should have reference equality with source array', () => {
      expect(shuffledArray).toBe(array)
    });

    // The elements should be mixed up...

});


// ----------------------------------------------------
describe('#dieX', () => {
  const dieSize6 = 6
  const dieSize8 = 8
  const dieSize20 = 20
  const d6 = dieX(dieSize6)
  const d8 = dieX(dieSize8)
  const d20 = dieX(dieSize20)

  test('should return a number', () => {
    const n = d6();
    expect(typeof n).toBe('number')
  });

  test('should generate numbers between 1 and 6', () => {
    for (let i = 0; i < 100; i += 1) {
      const n = d6()
      
    }
  })

  test('should generate numbers between 1 and 20', () => {
    for (let i = 0; i < 100; i += 1) {
      const n = d20()
      
    }
  })

  test('should simulate rolling a d8 + 3', () => {
    const bonus = 3
    for (let i = 0; i < 1000; i += 1) {
      const n = d8()
    }
  })
})

describe('#pick', () => {
  const nums = [1,2,3,4,5,6]
  const letters = ['a','b','c','d','e']

  test('pick', () => {
    const pick_1 = pick(nums)
    const pick_2 = pick(letters)

    expect(nums.includes(pick_1)).toBe(true)
    expect(letters.includes(pick_2)).toBe(true)
  })
})