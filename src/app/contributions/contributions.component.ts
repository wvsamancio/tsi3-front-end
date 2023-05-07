import { Component } from '@angular/core';
import { Contribute } from 'src/app/interfaces/contribute';
import { ContributeService } from 'src/app/services/contribute.service';

@Component({
  selector: 'app-contributions',
  templateUrl: './contributions.component.html',
  styleUrls: ['./contributions.component.css']
})
export class ContributionsComponent {
  public contributions: Contribute | any;

  constructor(private contributeService: ContributeService) {}

  ngOnInit(): void {
    this.contributeService.getContributions().subscribe(
      response => {
        this.contributions = response;
      },
      error => {
        console.log(error);
      }
    );
  }
}
