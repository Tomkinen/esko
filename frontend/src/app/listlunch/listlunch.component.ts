import { Component, OnInit, OnDestroy } from "@angular/core";
import { ApiconnectionService, Restaurant } from "../apiconnection.service";

@Component({
  selector: "app-listlunch",
  templateUrl: "./listlunch.component.html",
  styleUrls: ["./listlunch.component.css"]
})
export class ListlunchComponent implements OnInit, OnDestroy {
  apiListNew:any;
  apiListGet:any;
  restaurants = [];
  selectedRestaurant;
  maxValueRestaurant = 0;
  todaysRestaurant = {};
  constructor(private ApiconnectionService: ApiconnectionService) {}
  onSelect(restaurant): void {
    this.selectedRestaurant = restaurant;
    window.scrollTo(0, document.body.scrollHeight);
  }
  saveNew(): void {
    this.apiListNew = this.ApiconnectionService.doList().subscribe((data: Restaurant[]) => {
      this.restaurants = data;
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
        url: "",
        orderNumber: 0
      };
      window.scrollTo(0, document.body.scrollHeight);
    });
  }
  getRestaurants(): void {
    this.apiListGet = this.ApiconnectionService.doList().subscribe((data: Restaurant[]) => {
      this.restaurants = data;
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
  ngOnDestroy() {
    this.apiListNew.unsubscribe();
    this.apiListGet.unsubscribe();
  }
}
