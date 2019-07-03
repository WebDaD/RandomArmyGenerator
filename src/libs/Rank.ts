import ranks from '../data/ranks.json'

class Rank {
  private _level: number
  private _names: string[]

  constructor (level?: number) {
    this._level = level ? level : 0
    this._names = ranks
  }

  public toString (): string {
    return this._names[this._level]
  }

  public Promote (): Rank {
    if (this._level < this._names.length) {
      this._level += 1
    }
    return this
  }

  public Demote (): Rank {
    if (this._level > 0) {
      this._level -= 1
    }
    return this
  }
}

export default Rank
