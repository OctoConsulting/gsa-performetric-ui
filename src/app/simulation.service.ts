import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SimulationService {

constructor(private http: HttpClient) { }

 baseUrl = "http://localhost:8443/";  

 getAllSimulation(){
   return this.http.get(this.baseUrl + "gatling/v1/performance/getAllSimulations");
 }

 getSimulationById(id: any) {
   return this.http.get(this.baseUrl + 'gatling/v1/performance/simulation', {params: new HttpParams().set('id', id)});
 }

 createSimulation( simulationForm: any) {
  return this.http.post(this.baseUrl + "gatling/v1/performance", simulationForm);
 }

}
