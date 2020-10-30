import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpresaService } from 'src/app/services/empresa.service';
@Component({
  selector: 'app-empresa-edit',
  templateUrl: './empresa-edit.component.html',
  styleUrls: ['./empresa-edit.component.css']
})
export class EmpresaEditComponent implements OnInit {

  public id;
  public empresa: any = {};
  public success_message;
  constructor(
    private _route: ActivatedRoute,
    private _empresaService: EmpresaService
  ) { }
  ngOnInit() {
    this._route.params.subscribe(
      params => {
        this.id = params['id'];
        this._empresaService.getEmpresa(this.id).subscribe(
          response => {
            console.log(response);
            this.empresa = response.empresa;
          },
          error => {
          }
        );
      }
    );
  }
  close_alert() {
    this.success_message = '';
  }
  onSubmit(empresaForm) {
    if (empresaForm.valid) {

      this._empresaService.update_empresa({
        _id: this.id,
        nombreEmpresa: empresaForm.value.nombreEmpresa,
        direccion: empresaForm.value.direccion,
        contacto: empresaForm.value.contacto,
        telefono: empresaForm.value.telefono,
        llamadasEstado: empresaForm.value.llamadasEstado,
        correo: empresaForm.value.correo,
        etapaVenta: empresaForm.value.etapaVenta,
        medioComunicacion: empresaForm.value.medioComunicacion,
        estadoSeguimiento: empresaForm.value.estadoSeguimiento,
        celularEmpresa: empresaForm.value.celularEmpresa,
        telefonoFijoEmpresa: empresaForm.value.telefonoFijoEmpresa,

      }).subscribe(
        response => {
          this.success_message = 'Se actualizó correctamente';
        },
        error => {
        }
      );
    }
  }
}