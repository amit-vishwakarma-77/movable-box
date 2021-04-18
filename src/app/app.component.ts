import { Component, HostListener } from '@angular/core';
import { boxProp } from '../app/interfaces/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movable-box';

  boxes: boxProp[] = [];
  totalBoxes: number = -1;
  boxSelected: number = -1;
  transformSpeed: number = 2;
  keyboardEvents: boolean = true;
  maxBoxAllowed = 31;

  selectedBox(id: any) {
    if (this.boxSelected != -1)
      this.boxes[this.boxSelected].active = false;

    this.boxSelected = id;
    this.boxes[id].active = true;
  }

  addBox() {
    if (this.totalBoxes < this.maxBoxAllowed) {
      this.totalBoxes++;
      let newBox: boxProp = {
        boxNo: this.totalBoxes,
        left: 0,
        right: 0,
        up: 0,
        down: 0,
        hidden: false,
        active: false
      }
      this.boxes.push(newBox);
    }
  }

  changeSpeed(val: any) {
    // console.log(val)
    this.transformSpeed = val;
  }

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: any) {
    event.preventDefault();
    if (this.boxSelected > -1 && this.keyboardEvents == true) {

      let select: any = document.getElementById('box-container');
      let child: any = document.getElementById(this.boxSelected.toString());

      if (event.keyCode == 46) {
        this.boxes[this.boxSelected].hidden = true;
        this.maxBoxAllowed++;
      }

      //left
      if (event.keyCode == 37 || event.keyCode == 65) {
        if (child.getBoundingClientRect().left > select.getBoundingClientRect().left + 8)
          this.boxes[this.boxSelected].left = this.boxes[this.boxSelected].left - this.transformSpeed;
      }

      //right
      if (event.keyCode == 39 || event.keyCode == 68) {
        if (child.getBoundingClientRect().right +8 < select.getBoundingClientRect().right)
        this.boxes[this.boxSelected].left = this.boxes[this.boxSelected].left + this.transformSpeed;
      }

      //up
      if (event.keyCode == 38 || event.keyCode == 87) {
        if (child.getBoundingClientRect().top > select.getBoundingClientRect().top + 8)
          this.boxes[this.boxSelected].right = this.boxes[this.boxSelected].right - this.transformSpeed;
      }

      //down
      if (event.keyCode == 40 || event.keyCode == 83) {
        if (child.getBoundingClientRect().bottom +8 < select.getBoundingClientRect().bottom)
        this.boxes[this.boxSelected].right = this.boxes[this.boxSelected].right + this.transformSpeed;
      }

    }



  }

  toggleKeyBoardEvent(e: any) {
    this.keyboardEvents = this.keyboardEvents == true ? false : true;
  }


























}

