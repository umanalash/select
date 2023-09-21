import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: string[]=['Strawberry','Apple','Mango','Orange','Pineapple'];
  isCheckeditems: { [key: string]: boolean} = {};
  selectedItems: string[] = [];

  toggleDisplay(item: string) {

    this.isCheckeditems[item] = !this.isCheckeditems[item];
    if(this.isCheckeditems[item]) {
      this.selectedItems.push(item);
    }
      else{
        const index = this.selectedItems.indexOf(item);
        if(index!=-1) {
          this.selectedItems.splice(index,1)    
        }  
      }
    }
  }

