import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-childselect',
  templateUrl: './childselect.component.html',
  styleUrls: ['./childselect.component.css']
})
export class ChildselectComponent {
  @Input() selectedItems :string [] = [];
}
