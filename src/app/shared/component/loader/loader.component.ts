import { Component, Input } from '@angular/core';


@Component({
  selector: 'petra-loader',
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
  standalone: true
})
export class LoaderComponent  {
 
  @Input() isFullHeight : boolean = true;
  @Input() isShadow : boolean = false
  constructor() { }
 
}
