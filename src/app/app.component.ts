import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private body: HTMLBodyElement = <HTMLBodyElement>(document.querySelector('body'));
  
  ngOnInit(): void {
    
  }
  
}
