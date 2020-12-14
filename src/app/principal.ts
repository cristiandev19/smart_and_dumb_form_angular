import {Component} from '@angular/core';

/**
 * @title Inputs in a form
 */
@Component({
  selector: 'principal',
  templateUrl: 'principal.html'
})
export class PrincipalComponent {
  email : any = {
    email: 'hola',
    password: 'holaa'
  };

  handleEvent(event : any) {
    // console.log('event', event)
    this.email = event;
  }
}


/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */