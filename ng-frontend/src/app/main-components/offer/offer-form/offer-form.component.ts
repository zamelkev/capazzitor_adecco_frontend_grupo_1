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
      name: new FormControl('name', {
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
      shortDescription: new FormControl('shortDescription', {
        // nonNullable: true,
        validators: [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
      }),
      description: new FormControl('description', {
        // nonNullable: true,
        validators: [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
      }),
      offerDetails: new FormControl('offerDetails', {
        // nonNullable: true,
        validators: [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
      }),
      location: new FormControl('location', {
        // nonNullable: true,
        validators: [Validators.required]
      }),
      priority: new FormControl('priority', {
        // nonNullable: true,
        validators: [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
      }),
      phone: new FormControl('phone', {
        // nonNullable: true,
        validators: [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
      }),
      email: new FormControl('email', {
        // nonNullable: true,
        validators: [Validators.email, Validators.minLength(2), Validators.maxLength(100)]
      }),
      subscribedCandidates: new FormControl('subscribedCandidates', {
        // nonNullable: true,
        // validators: []
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
