import Soldier from "./Soldier";
import Squad from "./Squad";

class Platoon {
  private _name: string
  private _leader: Soldier
  private _squads: Squad[]

  constructor (name: string, leader: Soldier, squads?: Squad[]) {
    this._name = name
    this._leader = leader
    this._squads = squads ? squads : []
  }

  public AddSquad (squad: Squad): Platoon {
    this._squads.push(squad)
    return this
  }

  public name (): string {
    return this._name
  }

  public toString (): string {
    let r = ''
    r += 'Platoon ' + this.name()
    r += '\n'
    r += ' - ' + this._leader
    r += '\n'
    for (let index = 0; index < this._squads.length; index++) {
      const squad = this._squads[index]
      r += '  - Squad ' + this._name + '/' + squad.name()
      r += '\n'
    }
    return r
  }

  public static Random (): Platoon {
    let leader = Soldier.Random()
    leader.Promote().Promote()
    let platoon = new Platoon('101', leader)
    for (let index = 0; index < 10; index++) {
      platoon.AddSquad(Squad.Random())
    }
    return platoon
  }
}

export default Platoon