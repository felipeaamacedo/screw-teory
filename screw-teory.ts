type typeOfScrew = "revolute" | "prismatic"
export default class Screw {
	private _s:number[] 		//unit vector
	private _s0:number[]		//position vector
	private _q:number			//variable rotation/translation
	private _type:typeOfScrew	//type of joint 
	private _mth:number[][]		//homogeneous transformation matrix

	constructor(){
		this._s = [0, 0, 1];
		this._s0 = [0, 0, 0];
		this._type = "revolute";
		this._q = 0;
		this.mthCalc()
		this._mth = this.mth;
	}

	get s():number[]{
		return this._s
	}

	set s(linkSize:number[]){
		this._s = linkSize
	}

	get s0():number[]{
		return this._s0
	}
	set s0(newS0:number[]){
		this._s0 = newS0
	}

	get type():typeOfScrew{
		return this._type;
	}

	//TODO: Change the type os screw to something that can be evaluated to be either revolute or prismatic.
	set type(typeOfScrew: typeOfScrew){
		this._type = typeOfScrew;
	}	

	get q():number{
		return this._q;
	}

	set q(q:number){
		this._q = q
	}

	get mth():number[][]{
		return this._mth
	}

	set mth(mth:number[][]){
		this._mth = mth
	}

	mthCalc(){
		let theta:number;
		let t:number;

		if(this.type == "revolute"){
		theta = this.q;
		t = 0;
		}else{
			theta = 0;
			t = this.q;
		}
		
		let a11 = Math.cos(theta) + this.s[0]**2*(1 - Math.cos(theta))
		let a12 = this.s[1]*this.s[0]*(1 - Math.cos(theta)) - this.s[2]*Math.sin(theta)
		let a13 = this.s[2]*this.s[0]*(1 - Math.cos(theta)) + this.s[1]*Math.sin(theta) 

		let a21 = this.s[1]*this.s[0]*(1 - Math.cos(theta)) + this.s[2]*Math.sin(theta)
		let a22 = Math.cos(theta) + this.s[1]**2*(1 - Math.cos(theta))
		let a23 = this.s[2]*this.s[1]*(1 - Math.cos(theta)) - this.s[0]*Math.sin(theta)

		let a31 = this.s[0]*this.s[2]*(1 - Math.cos(theta)) - this.s[1]*Math.sin(theta) 
		let a32 = this.s[1]*this.s[2]*(1 - Math.cos(theta)) + this.s[0]*Math.sin(theta) 
		let a33 = Math.cos(theta) + this.s[2]**2*(1 - Math.cos(theta))

		let qAx = t*this.s[0] + this.s0[0] - this.s0[0]*a11 - this.s0[1]*a12 - this.s0[2]*a13
		let qAy = t*this.s[1] + this.s0[1] - this.s0[0]*a21 - this.s0[1]*a22 - this.s0[2]*a23
		let qAz = t*this.s[2] + this.s0[2] - this.s0[0]*a31 - this.s0[1]*a32 - this.s0[2]*a33

		this.mth = [[a11, a12, a13, qAx],	
					 [a21, a22, a23, qAy],
					 [a31, a32, a33, qAz],					
					 [0,   0,   0,	 1  ]]
	}
}