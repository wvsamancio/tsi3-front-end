import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contribute } from 'src/app/interfaces/contribute';
import { ContributeService } from 'src/app/services/contribute.service';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.css']
})
export class ContributeComponent {
  public departments: Array<{name: string}> = [
    { name: 'Água e Esgoto' },
    { name: 'Educação' },
    { name: 'Limpeza Urbana' },
    { name: 'Saúde' },
    { name: 'Segurança' },
    { name: 'Transporte' },
    { name: 'Vigilância Sanitária' }
  ];

  private contribute: Contribute = {} as Contribute;
  private lat: number = 0;
  private lng: number = 0;

  private username: any = sessionStorage.getItem('authenticatedUser');
  private token: any = sessionStorage.getItem('token');

  public success: boolean = false;
  public contributeSaved: Contribute = {} as Contribute;

  constructor(private contributeService: ContributeService) {}

  getCurrentLocation() {
    if (!this.username) {
      window.location.href = '/login';
    }
    if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(position => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
     });
    }
   else {
    alert("Geolocation is not supported by this browser.");
    }
   }

  public onSubmit(contributeFormValue: NgForm): void {
    this.contribute.content = contributeFormValue.value.content;
    this.contribute.department = contributeFormValue.value.department;
    this.contribute.lat = this.lat.toString();
    this.contribute.lng = this.lng.toString();
    this.contribute.username = this.username

    this.contributeService.saveContribute(this.contribute, this.token)
      .then(response => {
        this.contributeSaved = response;
        this.success = true;
        contributeFormValue.reset();
      })
      .catch(error => error);
  }

  ngOnInit(): void {
    this.getCurrentLocation();
  }
}
