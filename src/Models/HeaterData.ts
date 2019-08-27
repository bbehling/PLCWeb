export interface IHeater{
    signals?:ISignals[];
    psi?: number;
}

export interface ISignals{
    temp?:number;
}

export class HeaterData implements IHeater {
    signals = [
        {
            temp:0
        }
    ]

    constructor(){}
}