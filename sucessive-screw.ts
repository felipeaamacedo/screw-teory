import { multiply } from "mathjs"
import Screw from "./screw-teory"

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

    forwardKinematics()
    {
        let MTHProdutorio:number[][] =   [[1,0,0,0],
                                          [0,1,0,0],
                                          [0,0,1,0],
                                          [0,0,0,1]]

        let MTHProdutAteAnterior:number[][] =   [[1,0,0,0],
                                                 [0,1,0,0],
                                                 [0,0,1,0],
                                                 [0,0,0,1]]

        if (this.screws.length == 1)
        {
            return this.screws[0].mth
        }
        else
        {
            for(let i = 0; i < (this.screws.length); i++ )
            {
                if(i==0)
                {
                    MTHProdutorio = this.screws[i].mth
                    MTHProdutAteAnterior = this.screws[i].mth
                    console.log('screw '+i)
                }
                else
                {
                    console.log('screw '+i)
                    if(!multiply(this.screws[i].mth, MTHProdutAteAnterior))
                    {
                        console.log('Error at multiply(this.screws[i].getMth(), MTHProdutorio)') 
                        break;
                    }
                    else
                    {
                        MTHProdutorio = multiply(this.screws[i].mth, MTHProdutAteAnterior)
                    }
                }
            
                this.screws[i].mth = MTHProdutorio 
                MTHProdutAteAnterior = MTHProdutorio    
            }
        }
        return MTHProdutorio
    }
}