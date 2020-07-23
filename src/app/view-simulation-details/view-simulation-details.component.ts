import { Component, OnInit,ViewChild,ElementRef } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { SimulationService } from '../simulation.service';
import {DomSanitizer,SafeResourceUrl,} from '@angular/platform-browser';
import { throwSdsDialogContentAlreadyAttachedError } from '@gsa-sam/components/lib/dialog/dialog-container.component';

@Component({
  selector: "app-view-simulation-details",
  templateUrl: "./view-simulation-details.component.html",
  styleUrls: ["./view-simulation-details.component.scss"],
})


export class ViewSimulationDetailsComponent implements OnInit {
  simulation: any;
  filePath : any;
  reports:boolean = false;
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
            if(this.simulation.simulationResultsFolderName){
              this.filePath = "/src/assets/" + this.simulation.simulationResultsFolderName + "/index.html";
              this.filePath = this.sanitizer.bypassSecurityTrustResourceUrl(this.filePath);
              this.reports = true;
              console.log(this.filePath)
            }
          }
        );
      }
    );
  }
}
