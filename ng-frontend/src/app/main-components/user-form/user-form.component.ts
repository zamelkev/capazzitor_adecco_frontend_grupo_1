import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  editForm = this.createFormGroup(); // formulario
  error: boolean = false;
  id: string | undefined;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  createFormGroup() {
    return new FormGroup({
      uid: new FormControl({ value: null, disabled: true }),
      email: new FormControl('email', {
        // nonNullable: true,
        validators: [Validators.required, Validators.email, Validators.minLength(2), Validators.maxLength(100)]
      }),
      displayName: new FormControl('displayName', {
        // nonNullable: true,
        validators: [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
      }),
      password: new FormControl('password', {
        // nonNullable: true,
        validators: [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
      }),
      rol: new FormControl('rol', {
        // nonNullable: true,
        validators: [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
      }),
      photoURL: new FormControl('photoURL', {
        // nonNullable: true,
        validators: [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
      })
     
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
