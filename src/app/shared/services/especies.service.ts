import { Injectable } from '@angular/core';
import { Especie } from '../clases/especie';

@Injectable({
  providedIn: 'root'
})
export class EspeciesService {

  especies: Array<Especie>;

  constructor() {
    this.especies = new Array<Especie>();
    this.especies.push(new Especie(1, "Homo sapiens"));
    this.especies.push(new Especie(2, "Mus musculus"));
    this.especies.push(new Especie(3, "Especie 3"));
    this.especies.push(new Especie(4, "Especie 4"));
    this.especies.push(new Especie(5, "Especie 5"));
    this.especies.push(new Especie(6, "Especie 6"));
    this.especies.push(new Especie(7, "Especie 7"));
  }

  obtenerTodas(): Promise<Array<Especie>> {
    return new Promise<Array<Especie>>(res => res(this.especies));
  }

  obtener(codigo: number): Promise<Especie> {
    return new Promise<Especie>(res => res(this.especies.find(e => e.codigo == codigo)));
  }

  agregar(especie: Especie): Promise<Especie> {
    if (this.especies.some(e => especie.codigo == e.codigo))
      return new Promise<Especie>((_, reject) => reject(new ErrorEvent("Ya existe una especie con ese código")));

    this.especies.push(especie);
    return new Promise<Especie>((resolve) => resolve(especie))
  }

  actualizar(especie: Especie): Promise<Especie> {
    if (!this.especies.some(e => especie.codigo == e.codigo))
      return new Promise<Especie>((_, reject) => reject(new ErrorEvent("No existe una especie con ese código")));

    var index = this.especies.findIndex(e => e.codigo == especie.codigo);
    this.especies[index] = especie;

    return new Promise<Especie>((resolve) => resolve(especie))

  }

  quitar(especie: Especie): Promise<boolean> {
    if (!this.especies.some(e => especie.codigo == e.codigo))
      return new Promise<boolean>((_, reject) => reject(new ErrorEvent("No existe una especie con ese código")));

    this.especies = this.especies.filter(e => e.codigo != especie.codigo);

    return new Promise<boolean>((resolve) => resolve(true));
  }
}
