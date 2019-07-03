import Rank from './Rank'
import Status from './Status'
import Weapon from './Weapon'
import Armor from './Armor'
import Wound from './Wound'
import Skill from './Skill'

import names from '../data/names.json'

class Soldier {
  private _name: string
  private _age: number
  private _strength: number
  private _speed: number
  private _rank: Rank
  private _status: Status
  private _weapon: Weapon | undefined
  private _armor: Armor | undefined
  private _skills: Skill[] | undefined
  private _wounds: Wound[] | undefined

  public constructor (name: string, age: number, strength: number, speed: number) {
    this._name = name
    this._age = age
    this._strength = strength
    this._speed = speed
    this._rank = new Rank()
    this._status = Status.ALIVE
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

  public speed (): number {
    return this._speed
  }

  public rank (): Rank {
    return this._rank
  }

  public toString (): string {
    return this._rank + ' ' + this._name + ' (' + this._age + '), ' + (this._weapon ? this._weapon.name() : '')
  }

  public Promote (): Soldier {
    this._rank.Promote()
    this._age += 1
    return this
  }

  public Equip (item: Weapon | Armor): Soldier {
    if (item instanceof Weapon) {
      this._weapon = item
    } else {
      this._armor = item
    }
    return this
  }

  // TODO: readyness (calc all data into stuff) -> 0 - 1

  // TODO: gethit

  // TODO: fire -> return modified weapon data

  public static Random (): Soldier {
    let name = names[Math.floor(Math.random() * names.length)]
    let age = Math.floor(Math.random() * (30 - 20)) + 20
    let strength = Math.floor(Math.random() * (12 - 2)) + 2
    let speed = Math.floor(Math.random() * (12 - 2)) + 2
    let soldier = new Soldier(name, age, strength, speed)
    soldier.Equip(Weapon.Random())
    return soldier
  }
}

export default Soldier
