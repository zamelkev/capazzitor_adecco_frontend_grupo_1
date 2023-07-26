import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from 'src/app/services/company.service';

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
      fullName: new FormControl('', {
        // nonNullable: true,
        validators: [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
      }),
      slug: new FormControl('', {
        // nonNullable: true,
        validators: [Validators.required, Validators.minLength(5), Validators.maxLength(100), Validators.pattern('(^[a-z]+)(?![A-Z])([a-z_0-9]*$)')]
      }),
      imgUrl: new FormControl('', {
        // nonNullable: true,
        validators: [Validators.required]
      }),
     
    })
  }

  private showError(err: any): void {
    console.log(err);
    this.error = true;
  }

}
