import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import {
  ApiconnectionService,
  Restaurant,
  CreateRestaurant,
  DeleteRestaurant
} from "../apiconnection.service";

@Component({
  selector: "app-lunchdetails",
  templateUrl: "./lunchdetails.component.html",
  styleUrls: ["./lunchdetails.component.css"]
})
export class LunchdetailsComponent implements OnInit {
  constructor(private ApiconnectionService: ApiconnectionService) {}
  @Output() notifyParent: EventEmitter<any> = new EventEmitter();
  sendRestaurants() {
    this.ApiconnectionService
      .doList()
      .subscribe((data: Restaurant[]) => this.notifyParent.emit(data));
  }
  @Input() public restaurant;
  ngOnInit() {}
  saveRestaurant(restaurant): void {
    this.ApiconnectionService
      .doCreate(restaurant)
      .subscribe((data: CreateRestaurant) => this.sendRestaurants());
  }
  deleteRestaurant(restaurant): void {
    if (confirm("Are you sure to delete " + restaurant.name)) {
      this.ApiconnectionService
        .doDelete(restaurant)
        .subscribe((data: DeleteRestaurant) => {
          this.restaurant = {};
          this.sendRestaurants();
        });
    }
  }
}
