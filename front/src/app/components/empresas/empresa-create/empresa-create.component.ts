import { Component, OnInit } from '@angular/core';
import { Empresa } from "../../../models/Empresa";
import { EmpresaService } from 'src/app/services/empresa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empresa-create',
  templateUrl: './empresa-create.component.html',
  styleUrls: ['./empresa-create.component.css']
})
export class EmpresaCreateComponent implements OnInit {
  public empresa;
  constructor(
    private _empresaService: EmpresaService,
    private _router: Router
  ) {
    this.empresa = new Empresa('', '', '', '','', '', '', '','', '', '');
  }

  ngOnInit() {
  }
  onSubmit(empresaForm) {

    if (empresaForm.valid) {

      this._empresaService.insert_empresa({
        numeroEmpresa: empresaForm.value.numeroEmpresa,
        nombreEmpresa: empresaForm.value.nombreEmpresa,
        direccion: empresaForm.value.direccion,
        contacto: empresaForm.value.contacto,
        telefono: empresaForm.value.telefono,
        llamadasEstado: empresaForm.value.llamadasEstado,
        correo: empresaForm.value.correo,
        etapaVenta: empresaForm.value.etapaVenta,
        medioComunicacion: empresaForm.value.medioComunicacion,
        estadoSeguimiento: empresaForm.value.estadoSeguimiento,
      }).subscribe(
        response => {
         // this._router.navigate(['empresas']);

        },
        error => {

        }
      );

    }
  }

}
