import { Component, NgIterable } from '@angular/core';
import { Candidate } from 'src/app/models/candidate.model';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent {

  user: User | any = this.authService.userData;

  candidates: Candidate[] | User[] | any /*| Observable<Company[]>*/ | NgIterable<any[]> | null | undefined = [];

  panelOpenState = false;

  constructor(private authService: AuthService) {
    this.candidates = [
      {
      uid: 1234,
      }
    ];
  }
  ngOnInit(): void {
    this.authService?.getCandidate(this.user).subscribe( candidate => {
      this.candidates = candidate;
      console.log(this.candidates);
    });
  }

}
