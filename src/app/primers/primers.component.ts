import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Especie } from '../shared/clases/especie';
import { Primer } from '../shared/clases/primer';
import { EspeciesService } from '../shared/services/especies.service';
import { CargaComponent } from '../shared/dialogs/carga/carga.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-primers',
  templateUrl: './primers.component.html',
  styleUrls: ['./primers.component.scss']
})
export class PrimersComponent implements OnInit {

  especies: Array<Especie>;
  private _especieA: Especie;
  private _especieB: Especie;
  private _especieC: Especie;

  public template1: FormControl;
  public template2: FormControl;
  public template3: FormControl;

  public primer: Primer;

  constructor(private especiesSvc: EspeciesService, public dialog: MatDialog) {
    this.template1 = new FormControl('');
    this.template2 = new FormControl('');
    this.template3 = new FormControl('');

    this.especiesSvc.obtenerTodas().then(esp => this.especies = esp);
  }

  ngOnInit(): void {
    this.primer = new Primer();
  }

  get especieA(): Especie {
    return this._especieA;
  }

  set especieA(value: Especie) {
    //Si habia una especie seleccionada, la devuelvo a la lista general
    if (this._especieA != null) {
      this.especies.push(this._especieA);
    }

    //Asigno el nuevo valor de especie seleccionado
    this._especieA = value;

    //Filtro y quito el valor agregado de la lista general
    if (value != null)
      this.especies = this.especies.filter(e => e.codigo != value.codigo);
  }



  get especieB(): Especie {
    return this._especieB;
  }

  set especieB(value: Especie) {
    //Si habia una especie seleccionada, la devuelvo a la lista general
    if (this._especieB != null) {
      this.especies.push(this._especieB);
    }

    //Asigno el nuevo valor de especie seleccionado
    this._especieB = value;

    //Filtro y quito el valor agregado de la lista general
    if (value != null)
      this.especies = this.especies.filter(e => e.codigo != value.codigo);
  }


  get especieC(): Especie {
    return this._especieC;
  }

  set especieC(value: Especie) {
    //Si habia una especie seleccionada, la devuelvo a la lista general
    if (this._especieC != null) {
      this.especies.push(this._especieC);
    }

    //Asigno el nuevo valor de especie seleccionado
    this._especieC = value;

    //Filtro y quito el valor agregado de la lista general
    if (value != null)
      this.especies = this.especies.filter(e => e.codigo != value.codigo);
  }


  clearForm() {
    var result = window.confirm("Desea limpiar el formulario?. Perderá todos los datos cargados.");

    if (result) {

      this.especieA = null;
      this.especieB = null;
      this.especieC = null;
      this.template1.reset('');
      this.template2.reset('');
      this.template3.reset('');

      this.template1.markAsPristine();
      this.template2.markAsPristine();
      this.template3.markAsPristine();

      this.primer = new Primer();
    }
  }

  async calcular() {
    const dialogRef = this.dialog.open(CargaComponent, {
      width: '480px',
      height: '320x',
      maxWidth: '90vw',
      maxHeight:'50vh',
      disableClose: true,
      data: { textoEspera: 'Por favor espere, los calculos pueden tomar varios minutos u horas.', textoListo: 'Calculos realizados.' }
    });

    for (let i = 0; i < 100; i++) {
      await sleep(25);
      dialogRef.componentInstance.progreso.emit(i + 1);
    }

    dialogRef.componentInstance.progreso.emit(100);
    dialogRef.componentInstance.listo.emit(true);
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}