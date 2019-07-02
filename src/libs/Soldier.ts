class Soldier {
  private _name: string
  private _age: number
  private _strength: number

  public constructor (name: string, age: number, strength: number) {
    this._name = name
    this._age = age
    this._strength = strength
  }

  public name (): string {
    return this._name
  }

  public age (): number {
    return this._age
  }

  public strength (): number {
    return this._strength
  }

  public toString (): string {
    return this._name + ' (' + this._age + ')'
  }

  public static Random (): Soldier {
    let age = Math.floor(Math.random() * (30 - 20)) + 20
    let strength = Math.floor(Math.random() * (12 - 2)) + 2
    return new Soldier('test', age, strength)
  }
}

export default Soldier
