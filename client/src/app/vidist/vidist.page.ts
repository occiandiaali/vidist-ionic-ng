import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { list, search, settings, create, analytics, person, triangle, ellipse, square } from 'ionicons/icons';

@Component({
  selector: 'app-vidist',
  templateUrl: 'vidist.page.html',
  styleUrls: ['vidist.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class VidistPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    addIcons({ list, search, settings, create, analytics, person, triangle, ellipse, square });
  }
}
