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
import { NgxPaginationModule } from 'ngx-pagination';

import { UserIndexComponent } from './components/users/user-index/user-index.component';
import { UserCreateComponent } from './components/users/user-create/user-create.component';
import { UserEditComponent } from './components/users/user-edit/user-edit.component';
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
import { EmpresaIndexComponent } from './components/empresas/empresa-index/empresa-index.component';
import { EmpresaDetailComponent } from './components/empresas/empresa-detail/empresa-detail.component';
import { EditEmpresaComponent } from './components/empresas/edit-empresa/edit-empresa.component';
import { FilterProPipe } from './pipes/filter-pro.pipe';
import { DetailExperienciaComponent } from './components/experiencias/detail-experiencia/detail-experiencia.component';
import { EditExperienciaComponent } from './components/experiencias/edit-experiencia/edit-experiencia.component';
import { IndexExperienciaComponent } from './components/experiencias/index-experiencia/index-experiencia.component';
import { ExperienciaCreateComponent } from './components/experiencias/experiencia-create/experiencia-create.component';
import { AddExperienciaComponent } from './components/experiencias/add-experiencia/add-experiencia.component';
import { PostulanteCreateComponent } from './components/postulantes/postulante-create/postulante-create.component';
import { PostulanteIndexComponent } from './components/postulantes/postulante-index/postulante-index.component';
import { CreateClienteComponent } from './components/clientes/create-cliente/create-cliente.component';
import { ClienteIndexComponent } from './components/clientes/cliente-index/cliente-index.component';
import { ProveedorIndexComponent } from './components/proveedores/proveedor-index/proveedor-index.component';
import { ProveedorCreateComponent } from './components/proveedores/proveedor-create/proveedor-create.component';
import { IndexComponent } from './components/index/index/index.component';
import { FacturaIndexComponent } from './components/clientes/factura-index/factura-index.component';
import { FacturasComponent } from './components/clientes/facturas/facturas.component';
import { FacturaDetailComponent } from './components/clientes/factura-detail/factura-detail.component';
import { FacturaAllDetailsComponent } from './components/clientes/factura-all-details/factura-all-details.component';
import { TestComponent } from './components/test/test/test.component';
import { SidebarModule } from 'ng-sidebar';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ProductoIndexComponent,
    SidebarComponent,
    ProductoCreateComponent,
    ProductoEditComponent,
    UserIndexComponent,
    UserCreateComponent,
    UserEditComponent,
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
    EmpresaIndexComponent,
    EmpresaDetailComponent,
    EditEmpresaComponent,
    FilterProPipe,
    DetailExperienciaComponent,
    EditExperienciaComponent,
    IndexExperienciaComponent,
    ExperienciaCreateComponent,
    AddExperienciaComponent,
    PostulanteCreateComponent,
    PostulanteIndexComponent,
    CreateClienteComponent,
  
    ClienteIndexComponent,
  
    ProveedorIndexComponent,
  
    ProveedorCreateComponent,
  
    IndexComponent,
  
    FacturaIndexComponent,
  
    FacturasComponent,
  
    FacturaDetailComponent,
  
    FacturaAllDetailsComponent,
  
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    routing,
    SidebarModule.forRoot(),
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
