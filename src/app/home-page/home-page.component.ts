import { Component, OnInit } from '@angular/core';
import { SimulationService } from '../simulation.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{

  public isCollapsedContent = true;

  simulations: any;

  constructor(private simulationService : SimulationService) { }

  ngOnInit() {
    this.getSimulation();
  }

  getSimulation() {
    this.simulationService.getAllSimulation().subscribe(
      data => {
        this.simulations = data;
        console.log(this.simulations);
      }
    );
  }
}
