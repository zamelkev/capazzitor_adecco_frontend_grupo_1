import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-candidate-form',
  templateUrl: './candidate-form.component.html',
  styleUrls: ['./candidate-form.component.css']
})
export class CandidateFormComponent {

  editCandidateForm = this.createFormGroup(); // formulario
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
      nombreYapellidos: new FormControl('nombreYapellidos', {
        // nonNullable: true,
        validators: [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
      }),
      dni: new FormControl('dni', {
        // nonNullable: true,
        validators: [Validators.required, Validators.minLength(9), Validators.maxLength(9)]
      }),
      telefono: new FormControl('telefono', {
        // nonNullable: true,
        validators: [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
      }),
      // correo: new FormControl('correo', {
      //   // nonNullable: true,
      //   validators: [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
      // }),
      direccion: new FormControl('direccion', {
        // nonNullable: true,
        validators: [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
      }),
      formacion: new FormControl('formacion', {
        // nonNullable: true,
        validators: [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
      }),
      // ofertas: new FormControl('ofertas', {
      //   // nonNullable: true,
      //   validators: [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
      // }),
      // ofertas: new FormControl('ofertas', {
      //   // nonNullable: true,
      //   validators: [Validators.required]
      // }),
     
    })
  }


  ngOnInit(): void {


  }

  private getCandidateAndLoadInForm(id: string) {
    
  }

  private showError(err: any): void {
    console.log(err);
    this.error = true;
  }

  public onDelete(): void {
    
  }

  async onCandidateFormSubmit() {
    const response = await this.authService.addCandidateData(this.user, this.editCandidateForm.value);
    console.log(response);
  }

}
