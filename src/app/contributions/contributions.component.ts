import { Component } from '@angular/core';
import { Contribute } from 'src/app/interfaces/contribute';
import { ContributeService } from 'src/app/services/contribute.service';

@Component({
  selector: 'app-contributions',
  templateUrl: './contributions.component.html',
  styleUrls: ['./contributions.component.css'],
})
export class ContributionsComponent {
  public contributions: Contribute | any;
  public isLoading: boolean = false;
  public username: any = sessionStorage.getItem('authenticatedUser');
  private token: any = sessionStorage.getItem('token');

  constructor(private contributeService: ContributeService) {}

  ngOnInit(): void {
    if (!this.username) {
      window.location.href = '/login';
    }
    this.contributeService
      .getUserContributions(this.username, this.token)
      .then((response) => {
        this.contributions = response;
        this.isLoading = true;
      })
      .catch((error) => error);
  }
}
