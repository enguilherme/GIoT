import { Component, OnInit } from '@angular/core';
import { EnergyService } from '../energy.service';
import {Chart} from 'chart.js';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

@Component({
  selector: 'giot-dashboard',
  templateUrl: './giot-dashboard.component.html',
  styleUrls: ['./giot-dashboard.component.css']
})
export class GiotDashboardComponent {
  chart = [];

  constructor(public energy: EnergyService) { }

  cards = [
    { title: 'Potência instantânea', cols: 2, rows: 1 },
    { title: 'Card 2', cols: 1, rows: 1 },
    { title: 'Card 3', cols: 1, rows: 2 },
    { title: 'Card 4', cols: 1, rows: 1 }
  ];

  ngOnInit() {
    this.energy.getEnergyInstant().subscribe((data: any) => {
      //console.log(data);
      let Geracao_potencia  = data.map(res => res.Geracao_potencia);
      let Consumo_potencia = data.map(res => res.Consumo_potencia);
      let date = (data.map(res => res.TimeStamp));
      
      //console.log(date);
        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: date,
            datasets: [
              { 
                data: Geracao_potencia,
                borderColor: "#3cba9f",
                fill: false,
                pointRadius: 0
              },
              { 
                data: Consumo_potencia,
                borderColor: "#ffcc00",
                fill: false,
                pointRadius: 0
                
              },
            ]
          },
          options: { 
            animation: { 
              duration: 0 
            }, 
            maintainAspectRatio: false, 
            scales: { 
              xAxes: [{ 
                type: 'time', 
                distribution: 'series' 
              }] 
            }            
          }
        }); 
      
    });
  }
}