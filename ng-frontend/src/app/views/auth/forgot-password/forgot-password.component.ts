import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

restoreForm: FormGroup

  constructor(
    public authService: AuthService
  ) {
    this.restoreForm = new FormGroup({
      email: new FormControl(),
    });
  }
  ngOnInit() {
  }
  async onRestoreSubmit() {
    const response = await this.authService.ForgotPassword(this.restoreForm.value);
  }
}
