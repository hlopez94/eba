import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

@Component({
  selector: 'app-menu-modulos',
  templateUrl: './menu-modulos.component.html',
  styleUrls: ['./menu-modulos.component.scss']
})
export class MenuModulosComponent implements OnInit {
  
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'dna',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/svg/015-dna-2.svg'));
    }

  ngOnInit(): void {
  }

}  

