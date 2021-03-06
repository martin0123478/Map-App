import { Component, OnInit } from '@angular/core';
interface MenuItem{
  ruta:String;
  nombre:String;
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
    li{
      cursor:pointer;
    }
    `
  ]
})
export class MenuComponent  {

  menuItem:MenuItem[]=[
    {
      ruta:'/mapas/fullscreen',
      nombre:'FullScreen'
    },
    {
      ruta:'/mapas/zoomRange',
      nombre:'Zoom Range'
    },
    {
      ruta:'/mapas/marcadores',
      nombre:'Marcadores'
    },
    {
      ruta:'/mapas/propiedades',
      nombre:'Propiedades'
    },
  ]

}
