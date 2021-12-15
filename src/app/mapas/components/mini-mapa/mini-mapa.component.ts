import { Component, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as mapboxgl from 'mapbox-gl'

@Component({
  selector: 'app-mini-mapa',
  templateUrl: './mini-mapa.component.html',
  styles: [
    `
    div{
      wigth: 100%;
      heigth:150px;
      margin:0;
    }
    `
  ]
})
export class MiniMapaComponent implements AfterViewInit {
 @Input() lnglat: [number,number] = [0,0];
 @ViewChild('mapa') divMapa !:ElementRef;
  constructor() { }

  ngAfterViewInit(): void {
    const map = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
        center:this.lnglat,
        zoom:15
      }); 
      new mapboxgl.Marker()
      .setLngLat(this.lnglat)
      .addTo(map)
  }

}
