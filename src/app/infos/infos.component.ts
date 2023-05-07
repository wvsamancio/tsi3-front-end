import { Component } from '@angular/core';
import { Info } from 'src/app/interfaces/info';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent {
  public infos: Info | any;  

  constructor(private infoService: InfoService) {}

  ngOnInit(): void {
    this.infoService.getInfos().subscribe(
      response => {
        this.infos = response;
      },
      error => {
        error = error;
      }
    );
  }
}
