export interface IPump{
    signals?:ISignals[];
    psi?: number;
}

export interface ISignals{
    psi?:number;
    rpm?:number;
}

export class PumpData implements IPump {
    psi = 0;
    signals = [
        {
            psi:0
        }, 
        {
            rpm:10
        }
    ]

    constructor(){}
}