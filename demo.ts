import Screw from "./screw-teory"

const screw = new Screw();

screw.s0 = [0,0,0]
screw.q = Math.PI/2;
screw.setMth()

console.log(screw.getMth())