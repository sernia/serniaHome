import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @HostListener('scroll', ['$event'])
  onScroll(event: any) {
      // visible height + pixel scrolled >= total height
      if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
        console.log("End");
      }
  }

}
