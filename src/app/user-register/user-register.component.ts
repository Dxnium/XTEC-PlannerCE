import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserLoginService } from '../services/user-login.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  userForm!: FormGroup;
  error!: string;
  userType!: number;

  constructor(
    private formBuilder: FormBuilder, private userLoginService: UserLoginService
  ) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      nombre: [''],
      apellido1: [''],
      apellido2: [''],
      cedula: [''],
      carnet: [''],
      carrera: [''],
      password: [''],
      email: [''],
      telefono: [''],
      provinciaVive: [''],
      provinciaReside: ['']
      //intereses: ['']
      });
    this.userType = this.userLoginService.userType;
  }

  onSubmit(formData: any){
    
  }

  profesorSubmit() {
    /*if (this.profesor.invalid) {
        this.error = "falta rellenar datos de profesor";
        return;
      }
    this.profesorService.post(this.profesor.value["nombreProfesor"],this.profesor.value["cedulaProfesor"],
                              this.profesor.value["correoProfesor"],this.profesor.value["contrasennaProfesor"]).subscribe(data => this.error = data);
    this.profesor.reset();*/
  }

  estudianteSubmit() {
    /*if (this.estudiante.invalid) {
        this.error = "falta rellenar datos de estudiante";
        return;
      }
      this.estudianteService.post(this.estudiante.value["nombreEstudiante"],this.estudiante.value["carnetEstudiante"],
                                  this.estudiante.value["correoEstudiante"],this.estudiante.value["telefonoEstudiante"],
                                  this.estudiante.value["contrasennaEstudiante"]).subscribe(data => this.error = data);
      this.estudiante.reset();*/
  }

}
