import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  @ViewChild('interactive') interBubbleRef!: ElementRef<HTMLDivElement>;
  curX: number = 0;
  curY: number = 0;
  tgX: number = 0;
  tgY: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.move();
    document.addEventListener('mousemove', (event) => {
      this.tgX = event.clientX;
      this.tgY = event.clientY;
    });
  }

  move() {
    this.curX += (this.tgX - this.curX) / 20;
    this.curY += (this.tgY - this.curY) / 20;
    if (this.interBubbleRef) {
      this.interBubbleRef.nativeElement.style.transform = `translate(${Math.round(this.curX)}px, ${Math.round(this.curY)}px)`;
    }
    requestAnimationFrame(() => {
      this.move();
    });
  }

}


// document.addEventListener('DOMContentLoaded', () => {
//   const interBubble = document.querySelector<HTMLDivElement>('.interactive')!;
//   let curX = 0;
//   let curY = 0;
//   let tgX = 0;
//   let tgY = 0;

//   function move() {
//       curX += (tgX - curX) / 20;
//       curY += (tgY - curY) / 20;
//       interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
//       requestAnimationFrame(() => {
//           move();
//       });
//   }

//   window.addEventListener('mousemove', (event) => {
//       tgX = event.clientX;
//       tgY = event.clientY;
//   });

//   move();
// });
