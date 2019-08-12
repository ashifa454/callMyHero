import { Component } from '@angular/core';
import { HeroService } from './hero.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  query: string = "Please type your number";
  response: string = "";
  phoneBoard = [
    {
      number: 1,
      description: "@.?"
    },
    {
      number: 2,
      description: "ABC"
    },
    {
      number: 3,
      description: "DEF"
    },
    {
      number: 4,
      description: "GHI"
    },
    {
      number: 5,
      description: "JKL"
    },
    {
      number: 6,
      description: "MNO"
    },
    {
      number: 7,
      description: "PQRS"
    },
    {
      number: 8,
      description: "TUV"
    },
    {
      number: 9,
      description: "WXYZ"
    },
    {
      number: "*",
      description: "Send"
    },
    {
      number: 0,
      description: "Zero"
    },
    {
      number: "#",
      description: "Space "
    }
  ]
  constructor(private heroService: HeroService) { }
  handleButtonClick = function (number) {
    number = number.toString();
    number = number.replace("#", " ")
    if (this.query === "Please type your number") {
      this.query = `${number}`;
    } else {
      this.query += number;
    }
  }
  sendMessage = function () {
    this.heroService.callMyHero(this.query).subscribe((data: any) => {
      if (data.status == 200) {
        this.response = data.message;
      } else {
        this.response = "";
      }
    })
  }
}
