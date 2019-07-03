import DamageType from './DamageType'

import weapons from '../data/weapons.json'

class Weapon {
  private _name: string
  private _minRange: number
  private _maxRange: number
  private _minDamage: number
  private _maxDamage: number
  private _damageType: DamageType
  private _accuracy: number

  constructor (name: string, minRange: number, maxRange: number, minDamage: number, maxDamage: number, damageType: DamageType, accuracy: number) {
    this._name = name
    this._minRange = minRange
    this._maxRange = maxRange
    this._minDamage = minDamage
    this._maxDamage = maxDamage
    this._damageType = damageType
    this._accuracy = accuracy
  }

  public name (): string {
    return this._name
  }

  // TODO: getters

  public static ByName (name: string): Weapon {
    let weapon = weapons.filter(function (value) { return value.name === name })[0]
    return new Weapon(name, weapon.minRange, weapon.maxRange, weapon.minDamage, weapon.maxDamage, (DamageType as any)[weapon.damageType], weapon.accuracy)
  }

  public static Random (): Weapon {
    let w = weapons[Math.floor(Math.random() * weapons.length)]
    return Weapon.ByName(w.name)
  }
}

export default Weapon
