import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { AsignacionService } from 'src/app/services/asignacion.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';


@Component({
  selector: 'app-asignacion-index',
  templateUrl: './asignacion-index.component.html',
  styleUrls: ['./asignacion-index.component.css']
})
export class AsignacionIndexComponent implements OnInit {

  public identity;
  public asignaciones;
  constructor(
    private _userService : UserService,
    private _asignacionService : AsignacionService,
    private _router : Router,
  ) {
    this.identity = this._userService.getIdentity();
   }
   downPDF(){ 
    var parsed = this.asignaciones;
    var body = [];
   
    for (var j = 0; j < this.asignaciones.length ; j++) {
      body.push({
          id: j+1,
          personal: this.asignaciones[j].idpersonal.nombre,
          fecha: new Date(this.asignaciones[j].fecha).toISOString().slice(0,10),
          trabajador: this.asignaciones[j].iduser.apellidos,
      });
  }

    var data = this.asignaciones    
    const doc = new jsPDF() 
    
    var columnas = [{title: 'Personal', dataKey: 'personal'}, {title: 'Fecha', dataKey: 'fecha'},{title: 'Trabajador DBC', dataKey:'trabajador'}]
    doc.setFontSize(18);
    doc.text('Lista de Activos', 11, 8);
    doc.setFontSize(11);
    doc.setTextColor(10);

    autoTable(doc,{
      columns: columnas,
      body:body,
      //foot: [['Lista de activos']],
      theme: 'grid',
      
      didDrawCell: (data) => {
       // console.log(data.row.raw)
      },
      
    })
     // below line for Open PDF document in new tab
     doc.output('dataurlnewwindow')
     
     // below line for Download PDF document  
     //doc.save('table.pdf')
  }

   ngOnInit() {
    if(this.identity){
      //USUARIO AUTENTICADO
      this._asignacionService.get_asignaciones().subscribe(
        response=>{
          this.asignaciones = response.asignaciones;
          console.log(this.asignaciones);
          
        },
        error=>{

        }
      );
    }else{
      this._router.navigate(['']);
    }
  }

}
