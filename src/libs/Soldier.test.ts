import Soldier from './Soldier'

describe('Model :: Soldier ::', function () {

  describe('Contructor ', function() {
    it.each`
      name        | age   | strength
      ${'Test'}   | ${20} | ${12}
      ${'Tes2t'}  | ${22} | ${2}
      ${'Test3'}  | ${26} | ${7}
    `('should return a valid object with: $name, $age, $strength', ({ name, age, strength }) => {
      let test = new Soldier(name, age, strength)
      expect(test.name()).toBe(name)
      expect(test.age()).toBe(age)
      expect(test.strength()).toBe(strength)
    })
  })

  describe('ToString ', function() {
    it.each`
      name        | age   | strength  | result
      ${'Test'}   | ${20} | ${12}     | ${'Test (20)'}
      ${'Test2'}  | ${25} | ${12}     | ${'Test2 (25)'}
      ${'Test3'}  | ${21} | ${12}     | ${'Test3 (21)'}
    `('should return the string "$result" with: $name, $age, $strength', ({ name, age, strength, result }) => {
      let test = new Soldier(name, age, strength)
      expect(test.toString()).toBe(result)
    })
  })

  describe('Random ', function () {
    it('should create a Soldier within the boundaries', function () {
      for (let index = 0; index < 10; index++) {
        let test = Soldier.Random()
        expect(test.name()).toBe('test')
        expect(test.age()).toBeGreaterThanOrEqual(20)
        expect(test.age()).toBeLessThanOrEqual(30)
        expect(test.strength()).toBeGreaterThanOrEqual(2)
        expect(test.strength()).toBeLessThanOrEqual(12)
      }
    })
  })
})
