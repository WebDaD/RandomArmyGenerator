import Soldier from './Soldier'

import names from '../data/squads.json'

class Squad {
  private _soldiers: Soldier[]
  private _leader: Soldier
  private _name: string

  public constructor (name: string, leader: Soldier, soldiers?: Soldier[]) {
    this._name = name
    this._leader = leader
    this._soldiers = soldiers ? soldiers : []
  }

  public AddSoldier (soldier: Soldier): Squad {
    this._soldiers.push(soldier)
    return this
  }

  public name (): string {
    return this._name
  }

  public toString (): string {
    let r = ''
    r += 'Squad ' + this.name()
    r += '\n'
    r += ' - ' + this._leader
    r += '\n'
    for (let index = 0; index < this._soldiers.length; index++) {
      const soldier = this._soldiers[index]
      r += '  - ' + soldier
      r += '\n'
    }
    return r
  }

  public static Random (): Squad {
    let leader = Soldier.Random()
    leader.Promote()
    let name = names[Math.floor(Math.random() * names.length)]
    let squad = new Squad(name, leader)
    for (let index = 0; index < 10; index++) {
      squad.AddSoldier(Soldier.Random())
    }
    return squad
  }
}

export default Squad
