import { Component, OnInit } from '@angular/core';
import { SimulationService } from '../simulation.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{

  public isCollapsedContent = true;

  simulations: any;

  status: any;

  constructor(private simulationService : SimulationService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getSimulation();
    this.route.params.subscribe(
      (params: Params) => {
        this.status = params.status;
      }
    );

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
