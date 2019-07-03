import Soldier from './libs/Soldier'
import Squad from './libs/Squad'
import Platoon from './libs/Platoon'

let t: Soldier = Soldier.Random()
console.log(t.toString())

let s: Squad = Squad.Random()
console.log(s.toString())

let p: Platoon = Platoon.Random()
console.log(p.toString())
