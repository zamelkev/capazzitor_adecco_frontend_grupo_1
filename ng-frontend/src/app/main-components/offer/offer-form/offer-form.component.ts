import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-offer-form',
  templateUrl: './offer-form.component.html',
  styleUrls: ['./offer-form.component.css']
})
export class OfferFormComponent {

  editOfferForm = this.createFormGroup(); // formulario
  user: User | any = this.authService.userData;
  error: boolean = false;
  id: string | undefined;

  constructor(
    private authService: AuthService,
    private offerService: OfferService,
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
      title: new FormControl('title', {
        // nonNullable: true,
        validators: [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
      }),
      state: new FormControl('state', {
        // nonNullable: true,
        validators: [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
      }),
      category: new FormControl('category', {
        // nonNullable: true,
        validators: [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
      }),
      subcategories: new FormControl('subcategories', {
        // nonNullable: true,
        validators: [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
      }),
      creationDate: new FormControl('creationDate', {
        // nonNullable: true,
        validators: [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
      }),
      updateDate: new FormControl('updateDate', {
        // nonNullable: true,
        validators: [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
      }),
      contractType: new FormControl('contractType', {
        // nonNullable: true,
        validators: [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
      }),
      workingDay: new FormControl('workingDay', {
        // nonNullable: true,
        validators: [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
      }),
      description: new FormControl('description', {
        // nonNullable: true,
        validators: [Validators.required, Validators.minLength(2), Validators.maxLength(2500)]
      }),
      experienceMin: new FormControl('experienceMin', {
        // nonNullable: true,
        validators: [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
      }),
      studiesMin: new FormControl('studiesMin', {
        // nonNullable: true,
        validators: [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
      }),
      priority: new FormControl('priority', {
        // nonNullable: true,
        validators: [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
      }),
      salaryRank: new FormControl('salaryRank', {
        // nonNullable: true,
        validators: [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
      }),     
      city: new FormControl('city', {
        // nonNullable: true,
        validators: [Validators.required]
      }),
      country: new FormControl('country', {
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

  async onOfferFormSubmit() {
    const response = await this.offerService.addOfferData(this.user, this.editOfferForm.value);
    console.log(response);
  }

}
