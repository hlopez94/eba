import { KeyValue } from '@angular/common'
import { Especie } from './especie';
import { Rango } from './rango';

export class Primer {
    codigo: number;
    nombre: string;
    especieOrigen: Especie;
    secuencia: string;
    productoPCR: Rango;
    largoPrimer: Rango;
    meltingTem: Rango;

    constructor(){
        this.productoPCR= new Rango();
        this.largoPrimer=new Rango();
        this.meltingTem=new Rango();

    }
}
