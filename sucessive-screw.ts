import Screw from "./screw-teory"
import mathjs from "mathjs"

export default class Screw_Mechanism{
    private _screws:Screw[];
    constructor(){
        this._screws = [];
    }

    get screws():Screw[]{
        return this._screws;
    }

    addScrew(screw:Screw){
        this._screws.push(screw);
    }

    removeScrew(){
        this._screws.pop()
    }

    forwardKinematics():number[][]{
        let MTH_tot:number[][] =   [[1,0,0,0],
                                    [0,1,0,0],
                                    [0,0,1,0],
                                    [0,0,0,1]]
        let screws:Screw[] = this.screws
        for (let i=0; i<screws.length-1; i++){
            //TODO: Do a forwardKinematics in each of the joints to change the position of all of them.
           MTH_tot = mathjs.multiply(MTH_tot, screws[i].getMth()) 
        }

        return MTH_tot;
    }
}