import { Component } from '@angular/core';
import { Keg } from './models/keg.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Keg Town';

  editKeg = null;

  mainShow = true;
  lowShow = false;

  kegs: Keg[] = [
    new Keg(3.4, 'banquet', 'coors', 3),
    new Keg(6.8, 'Strong Blonde IPA', 'Pfreim', 5.50),
    new Keg(1.2, 'BEER', 'Natty Ice', 1.25),
    new Keg(1.2, 'BEER', 'Natty Light', 1.25, 5),
    new Keg(1.2, 'BEER', 'Natty Better', 1.25, 8)
  ]

  lowKegs: Keg[] = []

  checkKegs() {
    this.kegs.forEach((keg) => {
      if (keg.pints < 10) {
        this.lowKegs.push(keg)
      }
    })
  }

  displayTable(array) {

  }

  someMethod(alcoholContent: number, beerName: string, beerBrand: string, beerPrice: any) {
    let newKeg: Keg = new Keg(alcoholContent, beerName, beerBrand, parseFloat(beerPrice))

    this.kegs.push(newKeg);
  }

  kegEdit(keg) {
    this.editKeg = keg;
  }

  kegSell(keg) {
    keg.pints--;
  }


}
