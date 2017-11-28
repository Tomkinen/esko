import { Component, OnInit, Input } from "@angular/core";
import { ApiconnectionService } from "../apiconnection.service";

@Component({
  selector: "app-lunchdetails",
  templateUrl: "./lunchdetails.component.html",
  styleUrls: ["./lunchdetails.component.css"]
})
export class LunchdetailsComponent implements OnInit {
  constructor(private ApiconnectionService: ApiconnectionService) {}
  @Input() public restaurant;
  ngOnInit() {}
  saveRestaurant(restaurant): void {
    this.ApiconnectionService.doCreate(restaurant).then(result => {
      window.location.reload();
    });
  }
  deleteRestaurant(restaurant): void {
    if (confirm("Are you sure to delete " + restaurant.name)) {
      this.ApiconnectionService.doDelete(restaurant).then(result => {
        window.location.reload();
      });
    }
  }
}
