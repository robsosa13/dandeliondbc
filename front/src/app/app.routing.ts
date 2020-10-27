import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductoIndexComponent } from './components/productos/producto-index/producto-index.component';
import { ProductoCreateComponent } from './components/productos/producto-create/producto-create.component';
import { ProductoEditComponent } from './components/productos/producto-edit/producto-edit.component';
import { ClienteIndexComponent } from './components/clientes/cliente-index/cliente-index.component';
import { ClienteCreateComponent } from './components/clientes/cliente-create/cliente-create.component';
import { ClienteEditComponent } from './components/clientes/cliente-edit/cliente-edit.component';
import { UserIndexComponent } from './components/users/user-index/user-index.component';
import { UserCreateComponent } from './components/users/user-create/user-create.component';
import { UserEditComponent } from './components/users/user-edit/user-edit.component';
import { VentaIndexComponent } from './components/ventas/venta-index/venta-index.component';
import { VentaCreateComponent } from './components/ventas/venta-create/venta-create.component';
import { VentaDetalleComponent } from './components/ventas/venta-detalle/venta-detalle.component';
import { ActivoIndexComponent } from './components/activos/activo-index/activo-index.component';
import { ActivoCreateComponent } from './components/activos/activo-create/activo-create.component';
import { ActivoEditComponent } from './components/activos/activo-edit/activo-edit.component';
// import { EmpresaEditComponent } from './components/empresas/empresa-edit/empresa-edit.component';
import { EmpresaCreateComponent } from './components/empresas/empresa-create/empresa-create.component';
 import { EmpresaIndexComponent  } from './components/empresas/empresa-index/empresa-index.component';
 import { EmpresaDetailComponent  } from './components/empresas/empresa-detail/empresa-detail.component';

import { AsignacionCreateComponent } from './components/asignaciones/asignacion-create/asignacion-create.component';
import { AsignacionDetailComponent } from './components/asignaciones/asignacion-detail/asignacion-detail.component';
import { AsignacionIndexComponent } from './components/asignaciones/asignacion-index/asignacion-index.component';
import { PersonalIndexComponent } from './components/personal/personal-index/personal-index.component';
import { PersonalCreateComponent } from './components/personal/personal-create/personal-create.component';
// import { AsignacionDetailComponent } from './components/asignaciones/asignacion-detail/asignacion-detail.component';
// import { AsignacionIndexComponent } from './components/asignaciones/asignacion-index/asignacion-index.component';

import { ExpeAddComponent } from './components/ventas/expe-add/expe-add.component';
import { VentaEditComponent } from './components/ventas/venta-edit/venta-edit.component';

const appRoute: Routes = [
    { path: '', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'productos', component: ProductoIndexComponent },
    { path: 'producto/registrar', component: ProductoCreateComponent },
    { path: 'producto/editar/:id', component: ProductoEditComponent },
    { path: 'postulantes', component: ClienteIndexComponent },
    { path: 'postulante/registrar', component: ClienteCreateComponent },
    { path: 'postulante/editar/:id', component: ClienteEditComponent },
    { path: 'usuarios', component: UserIndexComponent },
    { path: 'usuarios/registrar', component: UserCreateComponent },
    { path: 'usuario/editar/:id', component: UserEditComponent },
    { path: 'experiencias', component: VentaIndexComponent },
    { path: 'experiencia/registrar', component: VentaCreateComponent },
    { path: 'experiencia/:id', component: VentaDetalleComponent },
    { path: 'activos', component: ActivoIndexComponent },
    { path: 'activo/registrar', component: ActivoCreateComponent },
    { path: 'activo/editar/:id', component: ActivoEditComponent },
    { path: 'asignaciones', component: AsignacionIndexComponent },
    { path: 'asignacion/registrar', component: AsignacionCreateComponent },
    { path: 'asignacion/:id', component: AsignacionDetailComponent },
    { path: 'empresas', component: EmpresaIndexComponent },
    // { path: 'edit-empresa/:id', component: EmpresaEditComponent },
    { path: 'save-empresa', component: EmpresaCreateComponent },
    { path: 'detail-empresa/:id', component: EmpresaDetailComponent },
    { path: 'personals', component: PersonalIndexComponent },
    { path: 'personal/registrar', component: PersonalCreateComponent },
    { path: 'personal/registrar', component: PersonalCreateComponent },
    { path: 'experiencia/adicionar/:id', component: ExpeAddComponent },
    { path: 'experiencia/detail-edit/:id', component: VentaEditComponent },
    
]


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoute);