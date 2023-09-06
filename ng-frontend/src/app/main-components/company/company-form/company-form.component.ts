import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent {

  editCompanyForm = this.createFormGroup(); // formulario
  user: User | any = this.authService.userData;
  error: boolean = false;
  id: string | undefined;

  constructor(
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  createFormGroup() {
    return new FormGroup({
      // id: new FormControl({ value: null, disabled: true }),
      // nombreSocial: new FormControl('nombreSocial', {
      //   // nonNullable: true,
      //   validators: [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
      // }),
      nombreFiscal: new FormControl('nombreFiscal', {
        // nonNullable: true,
        validators: [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
      }),
      cif: new FormControl('cif', {
        // nonNullable: true,
        validators: [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
      }),
      telefono: new FormControl('telefono', {
        // nonNullable: true,
        validators: [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
      }),
      // correo: new FormControl('correo', {
      //   // nonNullable: true,
      //   validators: [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
      // }),
      direcciones: new FormControl('direcciones', {
        // nonNullable: true,
        validators: [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
      }),
      sector: new FormControl('sector', {
        // nonNullable: true,
        validators: [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
      }),
      estado: new FormControl('estado', {
        // nonNullable: true,
        validators: [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
      }),
      // ofertas: new FormControl('ofertas', {
      //   // nonNullable: true,
      //   validators: [Validators.required]
      // }),
      numeroEmpleados: new FormControl('numeroEmpleados', {
        // nonNullable: true,
        validators: [Validators.required]
      }),
      proyeccion: new FormControl('proyeccion', {
        // nonNullable: true,
        validators: [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
      }),
     
    })
  }


  ngOnInit(): void {


  }

  private getCompanyAndLoadInForm(id: string) {
    
  }

  private showError(err: any): void {
    console.log(err);
    this.error = true;
  }

  public onDelete(): void {
    
  }

  async onCompanyFormSubmit() {
    // const response = await this.authService.AddCompanyData(this.editCompanyForm.value, this.loginResult);
    // console.log(response);
  }


}
