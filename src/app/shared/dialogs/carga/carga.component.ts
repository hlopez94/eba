import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';
import { Component, EventEmitter, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.scss']
})
export class CargaComponent implements OnInit {
  @Input() listo: EventEmitter<boolean>;
  @Input() progreso: EventEmitter<number>;

  mostrarBotones: boolean;
  textoContenido: string;
  porcentajeCompletado: number;


  constructor(
    public dialogRef: MatDialogRef<CargaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    this.listo = new EventEmitter<boolean>();
    this.progreso = new EventEmitter<number>();
    this.textoContenido = data.textoEspera;
    this.porcentajeCompletado=0;
  }


  ngOnInit(): void {

    this.listo.subscribe(res => {
      console.log(res);
      if (res) {
        this.mostrarBotones = true;
        this.textoContenido = this.data.textoListo;
        console.log("listo");
      }
    });

    this.progreso.subscribe(res => {
      this.porcentajeCompletado=res;
    });

  }

}
