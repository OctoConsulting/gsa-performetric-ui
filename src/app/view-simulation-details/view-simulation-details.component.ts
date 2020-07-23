import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { SimulationService } from '../simulation.service';
import {DomSanitizer,SafeResourceUrl,} from '@angular/platform-browser';

@Component({
  selector: "app-view-simulation-details",
  templateUrl: "./view-simulation-details.component.html",
  styleUrls: ["./view-simulation-details.component.scss"],
})
export class ViewSimulationDetailsComponent implements OnInit {
  simulation: any;
  filePath : any;
  constructor(private route: ActivatedRoute, 
    private simulationService: SimulationService,
    private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        //return params.id;
        this.simulationService.getSimulationById(params.id).subscribe(
          data => {
            console.log(data);
            this.simulation = data;
            this.filePath = "../assets/" + this.simulation.simulationResultsFolderName + "/index.html";
            this.filePath = this.sanitizer.bypassSecurityTrustResourceUrl(this.filePath);
            console.log(this.filePath);
          }
        );
      }
    );
  }
}
