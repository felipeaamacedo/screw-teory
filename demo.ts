import Screw from "./screw-teory"

const S = new Screw();
const L = new Screw()
const U = new Screw()
const R = new Screw()
const B = new Screw()
const T = new Screw()


S.s = [0, 0, 1]
S.s0 = [0, 0, 0]
S.setMth()

L.s = [0, -1, 0]
L.s0 = [88, 0, 0]
L.setMth()

U.s = [0, -1, 0]
U.s0 = [88, 0, 310]
U.q = -Math.PI/6    //TODO: Check the MTH since we are having calculus problem, when comparing with the Motoman robot at the TCC.
U.setMth()

R.s = [-1, 0, 0]
R.s0 = [88, 0, 350]
R.setMth()

B.s = [0, -1, 0]
B.s0 = [393, 0, 350]
B.setMth()

T.s = [-1, 0, 0]
T.s0 = [473, 0, 350]
T.setMth()

console.log(S)
console.log(L)
console.log(U)
console.log(R)
console.log(B)
console.log(T)