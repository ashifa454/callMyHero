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
  isResponded = false;
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
    const components = this.query.split(" ");
    if (components[0] === "0") {
      this.heroService.callMyHero(components[1]).subscribe((data: any) => {
        if (data.status == 200) {
          this.response = `Calling... ${data.message}`;
        } else {
          this.response = "No hero found with this code";
        }
        this.isResponded = true;
      })
    } else {
      this.response = "Invalid Format try use 0<space><hero code>";
      this.isResponded = true;
    }
  }
  resetScreen = function () {
    this.query = "Please type your number";
    this.response = "";
    this.isResponded = false;
  }
}
