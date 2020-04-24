import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

declare function linkReactAppAssets(appName: string, cb: (directive: string) => void): any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, AfterViewInit {
  appName = 'testapp';
  itemCount = 0;

  @ViewChild('rcom') rcom: ElementRef<HTMLElement>;

  ngOnInit() {

  }

  ngAfterViewInit() {
    linkReactAppAssets(this.appName, (directive: string) => {
      console.log(directive);
      let el: HTMLElement = this.rcom.nativeElement;
      el.addEventListener("onOk", (data) => {
        console.log(data);
      });
      
    });
  }

  on_Ok() {
    console.log('angular component!!');
  }

}
