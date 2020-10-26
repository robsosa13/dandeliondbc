import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { routing } from "./app.routing";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductoIndexComponent } from './components/productos/producto-index/producto-index.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProductoCreateComponent } from './components/productos/producto-create/producto-create.component';
import { ProductoEditComponent } from './components/productos/producto-edit/producto-edit.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ClienteIndexComponent } from './components/clientes/cliente-index/cliente-index.component';
import { ClienteCreateComponent } from './components/clientes/cliente-create/cliente-create.component';
import { ClienteEditComponent } from './components/clientes/cliente-edit/cliente-edit.component';
import { UserIndexComponent } from './components/users/user-index/user-index.component';
import { UserCreateComponent } from './components/users/user-create/user-create.component';
import { UserEditComponent } from './components/users/user-edit/user-edit.component';
import { VentaIndexComponent } from './components/ventas/venta-index/venta-index.component';
import { VentaCreateComponent } from './components/ventas/venta-create/venta-create.component';
import { VentaDetalleComponent } from './components/ventas/venta-detalle/venta-detalle.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ActivoCreateComponent } from './components/activos/activo-create/activo-create.component';
import { ActivoEditComponent } from './components/activos/activo-edit/activo-edit.component';
import { ActivoIndexComponent } from './components/activos/activo-index/activo-index.component';
import { AsignacionCreateComponent } from './components/asignaciones/asignacion-create/asignacion-create.component';
import { AsignacionDetailComponent } from './components/asignaciones/asignacion-detail/asignacion-detail.component';
import { AsignacionIndexComponent } from './components/asignaciones/asignacion-index/asignacion-index.component';
import { PersonalCreateComponent } from './components/personal/personal-create/personal-create.component';
import { PersonalIndexComponent } from './components/personal/personal-index/personal-index.component';
import { PersonalEditComponent } from './components/personal/personal-edit/personal-edit.component';
import { PersonalDetailComponent } from './components/personal/personal-detail/personal-detail.component';
import { EmpresaCreateComponent } from './components/empresas/empresa-create/empresa-create.component';
// import { EmpresaEditComponent } from './components/empresas/empresa-edit/empresa-edit.component';
import{ EmpresaIndexComponent} from './components/empresas/empresa-index/empresa-index.component'
//import { EmpresaIndexComponent } from './components/empresas/empresa-index/empresa-index.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ProductoIndexComponent,
    SidebarComponent,
    ProductoCreateComponent,
    ProductoEditComponent,
    ClienteIndexComponent,
    ClienteCreateComponent,
    ClienteEditComponent,
    UserIndexComponent,
    UserCreateComponent,
    UserEditComponent,
    VentaIndexComponent,
    VentaCreateComponent,
    VentaDetalleComponent,
    FilterPipe,
    ActivoCreateComponent,
    ActivoEditComponent,
    ActivoIndexComponent,
    AsignacionCreateComponent,
    AsignacionDetailComponent,
    AsignacionIndexComponent,
    PersonalCreateComponent,
    PersonalIndexComponent,
    PersonalEditComponent,
    PersonalDetailComponent,
     EmpresaCreateComponent,
    // EmpresaEditComponent,
   EmpresaIndexComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    routing,
    NgxPaginationModule
  //  EmpresaIndexComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
