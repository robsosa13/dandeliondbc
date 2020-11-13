import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-factura-index',
  templateUrl: './factura-index.component.html',
  styleUrls: ['./factura-index.component.css']
})
export class FacturaIndexComponent implements OnInit {
  public id;
  public cliente: [];
  public detalle_venta;
  public identity;
  constructor(
    private _route: ActivatedRoute,
    private _clienteService: ClienteService,
    private _userService: UserService,
    private _router: Router
  ) {
    this.identity = this._userService.getIdentity();
  }
  ngOnInit() {
    if (this.identity) {
      this._route.params.subscribe(params => {
        this.id = params['id'];
        this._clienteService.getCliente(this.id).subscribe(
          response => {
            this.cliente = response.cliente[0];
          },
          error => {
          }
        );
      });
    } else {
      this._router.navigate(['']);
    }
  }
}