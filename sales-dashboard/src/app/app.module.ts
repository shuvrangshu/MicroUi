import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const galleryComponent = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('sales-dashborad', galleryComponent);
  }
 }
