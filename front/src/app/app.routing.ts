import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductoIndexComponent } from './components/productos/producto-index/producto-index.component';
import { ProductoCreateComponent } from './components/productos/producto-create/producto-create.component';
import { ProductoEditComponent } from './components/productos/producto-edit/producto-edit.component';
import { UserIndexComponent } from './components/users/user-index/user-index.component';
import { UserCreateComponent } from './components/users/user-create/user-create.component';
import { UserEditComponent } from './components/users/user-edit/user-edit.component';
import { ActivoIndexComponent } from './components/activos/activo-index/activo-index.component';
import { ActivoCreateComponent } from './components/activos/activo-create/activo-create.component';
import { ActivoEditComponent } from './components/activos/activo-edit/activo-edit.component';
//import { EmpresaEditComponent } from './components/empresas/empresa-edit/empresa-edit.component';
import { EmpresaCreateComponent } from './components/empresas/empresa-create/empresa-create.component';
import { EmpresaIndexComponent } from './components/empresas/empresa-index/empresa-index.component';
import { EmpresaDetailComponent } from './components/empresas/empresa-detail/empresa-detail.component';
import { AsignacionCreateComponent } from './components/asignaciones/asignacion-create/asignacion-create.component';
import { AsignacionDetailComponent } from './components/asignaciones/asignacion-detail/asignacion-detail.component';
import { AsignacionIndexComponent } from './components/asignaciones/asignacion-index/asignacion-index.component';
import { PersonalIndexComponent } from './components/personal/personal-index/personal-index.component';
import { PersonalCreateComponent } from './components/personal/personal-create/personal-create.component';
//experiencias
//import { EditExperienciaComponent } from './components/experiencias/edit-experiencia/edit-experiencia.component';
import { IndexExperienciaComponent } from './components/experiencias/index-experiencia/index-experiencia.component';
import { DetailExperienciaComponent } from './components/experiencias/detail-experiencia/detail-experiencia.component';
import { ExperienciaCreateComponent } from './components/experiencias/experiencia-create/experiencia-create.component';
import { AddExperienciaComponent } from './components/experiencias/add-experiencia/add-experiencia.component';
import { PostulanteCreateComponent } from './components/postulantes/postulante-create/postulante-create.component';
import { PostulanteIndexComponent } from './components/postulantes/postulante-index/postulante-index.component';
import { CreateClienteComponent } from './components/clientes/create-cliente/create-cliente.component';
import { ClienteIndexComponent } from './components/clientes/cliente-index/cliente-index.component';
import { ProveedorCreateComponent } from './components/proveedores/proveedor-create/proveedor-create.component';
import { ProveedorIndexComponent } from './components/proveedores/proveedor-index/proveedor-index.component';
import { IndexComponent } from './components/index/index/index.component';

const appRoute: Routes = [
    { path: '', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'productos', component: ProductoIndexComponent },
    { path: 'producto/registrar', component: ProductoCreateComponent },
    { path: 'producto/editar/:id', component: ProductoEditComponent },
    { path: 'postulantes', component: PostulanteIndexComponent },
    { path: 'postulante/registrar', component: PostulanteCreateComponent },
    // { path: 'postulante/editar/:id', component: ClienteEditComponent },
    { path: 'usuarios', component: UserIndexComponent },
    { path: 'usuarios/registrar', component: UserCreateComponent },
    { path: 'usuario/editar/:id', component: UserEditComponent },
    { path: 'activos', component: ActivoIndexComponent },
    { path: 'activo/registrar', component: ActivoCreateComponent },
    { path: 'activo/editar/:id', component: ActivoEditComponent },
    { path: 'asignaciones', component: AsignacionIndexComponent },
    { path: 'asignacion/registrar', component: AsignacionCreateComponent },
    { path: 'asignacion/:id', component: AsignacionDetailComponent },
    { path: 'empresas', component: EmpresaIndexComponent },
    //{ path: 'empresa/:id', component: EmpresaEditComponent },
    //{ path: 'empresas', component: EmpresaIndexComponent },
    //{ path: 'edit-empresa/:id', component: EmpresaEditComponent },
    { path: 'save-empresa', component: EmpresaCreateComponent },
    { path: 'detail-empresa/:id', component: EmpresaDetailComponent },
    { path: 'personals', component: PersonalIndexComponent },
    { path: 'personal/registrar', component: PersonalCreateComponent },
    //path: 'empresa/edit/:id', component: EditEmpresaComponent },  
    { path: 'empresa-search', component: EmpresaIndexComponent },
    { path: 'experiencias', component: IndexExperienciaComponent },
    { path: 'experiencia/registrar', component: ExperienciaCreateComponent },
    { path: 'experiencia/:id', component: DetailExperienciaComponent },
    { path: 'experiencia/adicionar/:id', component: AddExperienciaComponent },
    { path: 'clientes', component: ClienteIndexComponent },
    { path: 'cliente/registrar', component: CreateClienteComponent },
    { path: 'proveedores', component: ProveedorIndexComponent },
    { path: 'about', component: IndexComponent }

]
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoute);

