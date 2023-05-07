import { Component } from '@angular/core';
import { Contribute } from '../interfaces/contribute';
import { ActivatedRoute } from '@angular/router';
import { ContributeService } from '../services/contribute.service';

@Component({
  selector: 'app-contribute-details',
  templateUrl: './contribute-details.component.html',
  styleUrls: ['./contribute-details.component.css']
})
export class ContributeDetailsComponent {
  public contribute: Contribute | any;
  public googleLatLng: google.maps.LatLng | any;
  public isLoading: boolean = false;

  constructor(private route: ActivatedRoute, private contributeService: ContributeService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.contributeService.getContribute(id).subscribe(
      response => {
        this.contribute = response;
        this.googleLatLng = new google.maps.LatLng(this.contribute.lat, this.contribute.lng);
        this.isLoading = true;
      },
      error => {
        console.log(error);
      }
    )
  }
}
