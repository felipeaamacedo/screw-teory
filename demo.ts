import Screw from "./screw-teory"
import Screw_Mechanism from "./sucessive-screw"

const S = new Screw()
const L = new Screw()
const U = new Screw()
const R = new Screw()
const B = new Screw()
const T = new Screw()

const MH5F = new Screw_Mechanism()
MH5F.addScrew(S)
MH5F.addScrew(L)
MH5F.addScrew(U)
MH5F.addScrew(R)
MH5F.addScrew(B)
MH5F.addScrew(T)

S.s = [0, 0, 1]
S.s0 = [0, 0, 0]
S.mthCalc()

L.s = [0, -1, 0]
L.s0 = [88, 0, 0]
L.mthCalc()

U.s = [0, -1, 0]
U.s0 = [88, 0, 310]
U.q = -Math.PI/6    //TODO: Check the MTH since we are having calculus problem, when comparing with the Motoman obot at the TCC.
U.mthCalc()

R.s = [-1, 0, 0]
R.s0 = [88, 0, 350]
R.mthCalc()

B.s = [0, -1, 0]
B.s0 = [393, 0, 350]
B.mthCalc()

T.s = [-1, 0, 0]
T.s0 = [473, 0, 350]
T.mthCalc()


console.log(S)
console.log(MH5F.screws[0].mth)
console.log(L)
console.log(U)
console.log(R)
console.log(B)
console.log(T)
// console.log(MH5F.forwardKinematics())