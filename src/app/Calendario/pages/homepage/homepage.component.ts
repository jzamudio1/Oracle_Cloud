import { Component, OnInit } from '@angular/core';
import { diasEspeciales } from '../../interfaces/diasEspeciales';
import { CalendarioService } from '../../service/calendario.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { TyrParam } from '../../../api/interface/TyrParam';

@Component({
  selector: 'pages-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  detailsForm!: FormGroup;



  public displayColumn: string[] = ['fecha', 'evento', 'descripcion'];
  public arrayDays: diasEspeciales[] = [];

  dataSource: any;
  date: any;
  constructor(private calendario: CalendarioService, private fb: FormBuilder, private datePipe: DatePipe) { }

  ngOnInit() {
    this.initDetailsForm()
    this.postDays();
  }


  initDetailsForm() {
    // absolute measureType Form
    this.detailsForm = this.fb.group({
      Fecha: new FormControl(null),
      Evento: new FormControl(null),
      Descripcion: new FormControl(null)
    });
  }


  //Cargar Grid
  postDays(): void {
    this.arrayDays = this.calendario.getDayCalendar();
    console.log(this.arrayDays)
  }

  //Search
  SearchDays() {
    this.arrayDays = [];
    this.postDays();
  }

  //Post Day
  postDay() {
    let date = this.datePipe.transform(this.detailsForm?.get("Fecha")?.value, 'dd/MM/yyyy')
    console.log(date)
    console.log(this.detailsForm?.get("Evento")?.value)
    console.log(this.detailsForm?.get("Descripcion")?.value)

    let p_param: TyrParam[] = [
      {
        "ORDEN": 1,
        "PARAMETRO": "P_DATE",
        "FORMATO": "",
        "VALORES": date,
      },
      {
        "ORDEN": 2,
        "PARAMETRO": "P_EVENTO",
        "FORMATO": "",
        "VALORES": this.detailsForm?.get("Evento")?.value,
      },
      {
        "ORDEN": 3,
        "PARAMETRO": "P_DESCRPCION",
        "FORMATO": "",
        "VALORES": this.detailsForm?.get("Descripcion")?.value,
      }
    ];


    this.calendario.addDayCalendar(p_param);
//hola
  }

}