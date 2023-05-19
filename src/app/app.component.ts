import { Component , ElementRef , ViewChild } from '@angular/core';
import { jsPDF } from 'jspdf';
import  autoTable  from 'jspdf-autotable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // @ViewChild('content' , {static: false}) el!: ElementRef; +
  


  // makePDF(){
  //   let pdf = new jsPDF('p' , 'pt' , 'a4');
  //   pdf.html(this.el.nativeElement, {
  //     callback: (pdf)=> {
  //       // pdf.save("demo.pdf");
  //       console.log('Nicht hier');
        
  //     }
  //   });
  // }

  downloadPDF(){

    let doc = new jsPDF();
    autoTable(doc , {html: "#test"});
    doc.save("test.pdf");

  }
  
 
}
