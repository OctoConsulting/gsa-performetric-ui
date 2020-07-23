import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { SimulationService } from '../simulation.service';

@Component({
  selector: "app-view-simulation-details",
  templateUrl: "./view-simulation-details.component.html",
  styleUrls: ["./view-simulation-details.component.scss"],
})
export class ViewSimulationDetailsComponent implements OnInit {
  simulation: any;

  constructor(private route: ActivatedRoute, private simulationService: SimulationService) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        //return params.id;
        this.simulationService.getSimulationById(params.id).subscribe(
          data => {
            console.log(data);
            this.simulation = data;
          }
        );
      }
    );
  }
}
