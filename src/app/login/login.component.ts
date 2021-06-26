import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginService } from '../services/user-login.service';

//import { StudentCourseService } from './../Student/student-services/student-course.service';
//import { TeacherCourseService } from '../services/teacher-course.service';
//import { StudentService } from './../Student/student-services/student.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //Componente de log in

  userType: number = 1; 
  LogInForm: FormGroup;
  error: string = '';

  constructor(private formB: FormBuilder, private router: Router, private userLoginService: UserLoginService) { 
    this.LogInForm = this.formB.group({
    userID: [''],
    password: ['']
    });
  }

  ngOnInit(): void {
  }

  AdminUser(){
    this.userType = 1;
  }

  TeacherUser(){
    this.userType = 2;
  }

  StudentUser(){
    this.userType = 3;
  }

  /**
   * Listener del form, llama al servicio para comparar contraseñas y redirigir acorde a como se seleccionó
   * @param formData 
   */
  onSubmit(formData: any){
    
    console.log(formData.userID);
    console.log(formData.password);
    this.userLoginService.LogIn(this.userType, formData.userID, formData.password).subscribe((resp: any) => {
      const answer = resp;
      console.log(answer);
    });
  }

  teacherRegister(){
    this.userLoginService.setUserType(this.userType);
    this.router.navigate( ['register']);
  }

  studentRegister(){
    this.userLoginService.setUserType(this.userType);
    this.router.navigate( ['register']);
  }
  
  /**
   * Inicializa los datos que se van a mostrar si se hace login como profesor
   */
  goTeacherIndex(){
    /*this.teacherCourseService.getCourses().subscribe((resp: any) => {
      this.teacherCourseService.courses = resp;
      this.router.navigate(['t-index']);
      
    })*/
  }
}
