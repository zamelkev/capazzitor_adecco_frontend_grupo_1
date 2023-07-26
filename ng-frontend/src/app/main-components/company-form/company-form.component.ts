import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from 'src/app/services/company.service';
import { Company } from 'src/app/models/company.model';
@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent {

  editForm = this.createFormGroup(); // formulario
  error: boolean = false;
  id: string | undefined;

  constructor(
    private companyService: CompanyService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  createFormGroup() {
    return new FormGroup({
      id: new FormControl({ value: null, disabled: true }),
      nombreSocial: new FormControl('', {
        // nonNullable: true,
        validators: [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
      }),
      nombreFiscal: new FormControl('', {
        // nonNullable: true,
        validators: [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
      }),
      cif: new FormControl('', {
        // nonNullable: true,
        validators: [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
      }),
      telefono: new FormControl('', {
        // nonNullable: true,
        validators: [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
      }),
      correo: new FormControl('', {
        // nonNullable: true,
        validators: [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
      }),
      direcciones: new FormControl('', {
        // nonNullable: true,
        validators: [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
      }),
      sector: new FormControl('', {
        // nonNullable: true,
        validators: [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
      }),
      estado: new FormControl('', {
        // nonNullable: true,
        validators: [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
      }),
      ofertas: new FormControl('', {
        // nonNullable: true,
        validators: [Validators.required]
      }),
      numeroEmpleados: new FormControl('', {
        // nonNullable: true,
        validators: [Validators.required]
      }),
      proyeccion: new FormControl('', {
        // nonNullable: true,
        validators: [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
      }),
     
    })
  }


  ngOnInit(): void {


  }

  private getCompanyAndLoadInForm(id: string) {
    
  }

  save() {
    if (!this.editForm.valid) return
    let categories = {
      name: this.editForm.get("fullName")?.value,
      slug: this.editForm.get("slug")?.value,
      imgUrl: this.editForm.get("imgUrl")?.value
    } as any;

    let id = this.editForm.get("id")?.value;

    
    if (id) { // actualización
      

    } else { // creación
      
    }
  }



  private showError(err: any): void {
    console.log(err);
    this.error = true;
  }

  public onDelete(): void {
    
  }


}
