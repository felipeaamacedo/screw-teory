class st {
	_s:number[];
	_s0:number[];
	_q:number;
	_type:string;
	_theta:number;
	_t:number;
	_mth:number[][]
	constructor(){
		this._s = [0, 0, 0];
		this._s0 = [0, 0, 1];
		this._type = "revolute";
		this._q = 0;
		this._theta = this.theta;
		this._t = this.t;
		this._mth = this.mth
	}

	get s():number[]{
		return this._s
	}

	get s0():number[]{
		return this._s0
	}

	get type():string{
		return this._type;
	}
	
	get q():number{
		return this._q;
	}

	get theta(){
		if (this.type == "revolute"){
			return this._theta = this.q;
		} else {
			return this._theta = 0;
		}
	}

	get t(){
		if (this.type == "prismatic"){
			return this._t = this.q;
		} else {
			return this._t = 0;
		}
	}

	get mth(){
		let a11 = Math.cos(this.theta) + this.s[0]**2*(1 - Math.cos(this.theta))
		let a12 = this.s[1]*this.s[0]*(1 - Math.cos(this.theta)) - this.s[2]*Math.sin(this.theta)
		let a13 = this.s[2]*this.s[0]*(1 - Math.cos(this.theta)) - this.s[1]*Math.sin(this.theta) 

		let a21 = this.s[1]*this.s[1]*(1 - Math.cos(this.theta)) + this.s[2]*Math.sin(this.theta)
		let a22 = Math.cos(this.theta) + this.s[1]**2*(1 - Math.cos(this.theta))
		let a23 = this.s[2]*this.s[1]*(1 - Math.cos(this.theta)) - this.s[0]*Math.sin(this.theta)

		let a31 = this.s[0]*this.s[2]*(1 - Math.cos(this.theta)) + this.s[1]*Math.sin(this.theta) 
		let a32 = this.s[1]*this.s[2]*(1 - Math.cos(this.theta)) + this.s[0]*Math.sin(this.theta) 
		let a33 = Math.cos(this.theta) + this.s[2]**2*(1 - Math.cos(this.theta))

		let qAx = this.t*this.s[0] + this.s0[0] - this.s0[0]*a11 - this.s0[1]*a12 - this.s0[2]*a13
		let qAy = this.t*this.s[1] + this.s0[1] - this.s0[0]*a21 - this.s0[1]*a22 - this.s0[2]*a23
		let qAz = this.t*this.s[2] + this.s0[2] - this.s0[0]*a31 - this.s0[1]*a32 - this.s0[2]*a33

		return this._mth = [[a11, a12, a13, qAx],	
							[a21, a22, a23, qAy],
							[a31, a32, a33, qAz],					
							[0,   0,   0,	1  ]]
		}
}