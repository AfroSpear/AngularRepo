import { Component } from '@angular/core';
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}

library.add(faCalendarAlt);
dom.watch();
