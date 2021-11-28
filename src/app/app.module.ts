import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoModule } from './todo/todo.module';
import { MouseHoverEffectPipe } from './mouse-hover-effect.pipe';
import { HighlightPipe } from './highlight.pipe';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MouseHoverEffectPipe,
    HighlightPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule
  ],
  providers: [{provide: LocationStrategy, useClass : HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
