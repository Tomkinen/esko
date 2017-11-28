import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ApiconnectionService } from "../apiconnection.service";

@Component({
  selector: "app-lunchdetails",
  templateUrl: "./lunchdetails.component.html",
  styleUrls: ["./lunchdetails.component.css"]
})
export class LunchdetailsComponent implements OnInit {
  constructor(private ApiconnectionService: ApiconnectionService) {}
  @Output() notifyParent: EventEmitter<any> = new EventEmitter();
  sendRestaurants() {
    this.ApiconnectionService.doList().then(result => {
      this.notifyParent.emit(result);
    });
  }
  @Input() public restaurant;
  ngOnInit() {}
  saveRestaurant(restaurant): void {
    this.ApiconnectionService.doCreate(restaurant).then(result => {
      this.sendRestaurants();
    });
  }
  deleteRestaurant(restaurant): void {
    if (confirm("Are you sure to delete " + restaurant.name)) {
      this.ApiconnectionService.doDelete(restaurant).then(result => {
        this.restaurant = {};
        this.sendRestaurants();
      });
    }
  }
}
