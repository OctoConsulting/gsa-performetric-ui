import { Component, OnInit } from '@angular/core';
import { SimulationService } from '../simulation.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent{

  public isCollapsedContent = true;

  constructor(private simulationService : SimulationService) { }

  dataObj : any;

  ngOnInit(){
    this.getSimulation();
  }

  getSimulation(){
    this.simulationService.getAllSimulation().subscribe(
      data => {
        this.dataObj = data;
        console.log(data);
      }
    )
  }
}
