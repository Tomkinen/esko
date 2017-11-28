import { Component, OnInit } from "@angular/core";
import { ApiconnectionService } from "../apiconnection.service";

@Component({
  selector: "app-listlunch",
  templateUrl: "./listlunch.component.html",
  styleUrls: ["./listlunch.component.css"]
})
export class ListlunchComponent implements OnInit {
  restaurants = [];
  selectedRestaurant = {};
  maxValueRestaurant = 0;
  todaysRestaurant = {};
  constructor(private ApiconnectionService: ApiconnectionService) {}
  onSelect(restaurant): void {
    this.selectedRestaurant = restaurant;
    window.scrollTo(0, document.body.scrollHeight);
  }
  saveNew(): void {
    this.ApiconnectionService.doList().then(result => {
      this.restaurants = result;
      this.maxValueRestaurant = Math.max.apply(
        Math,
        this.restaurants.map(o => {
          return o.id;
        })
      );
      this.maxValueRestaurant = this.maxValueRestaurant + 1;
      this.selectedRestaurant = {
        id: this.maxValueRestaurant,
        name: "",
        orderNumber: 0
      };
      window.scrollTo(0, document.body.scrollHeight);
    });
  }
  getRestaurants(): void {
    this.ApiconnectionService.doList().then(result => {
      this.restaurants = result;
      let highest = 0;
      let highestRestaurant = {};
      for (let restaurant of this.restaurants) {
        if (highest < restaurant.orderNumber) {
          highest = restaurant.orderNumber;
          highestRestaurant = restaurant;
        }
      }
      this.todaysRestaurant = highestRestaurant;
    });
  }
  setRestaurants(childRestaurants): void {
    this.restaurants = childRestaurants;
  }
  ngOnInit() {
    this.getRestaurants();
  }
}
