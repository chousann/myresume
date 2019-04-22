import {Component, NgModule} from '@angular/core';
import {materialVersion} from '../version/version';

import {MatIconModule} from '@angular/material';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
export class Footer {
  isNextVersion = location.hostname.startsWith('next.material.angular.io');

  version = materialVersion;
}


@NgModule({
  imports: [
    MatIconModule,
  ],
  exports: [Footer],
  declarations: [Footer],
})
export class FooterModule {}
