import {
  Component,
  OnInit,
  OnDestroy,
  OnChanges,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  ApiconnectionService,
  Restaurant,
  CreateRestaurant,
  DeleteRestaurant
} from '../apiconnection.service';

@Component({
  selector: 'app-lunchdetails',
  templateUrl: './lunchdetails.component.html',
  styleUrls: ['./lunchdetails.component.css']
})
export class LunchdetailsComponent implements OnInit, OnDestroy, OnChanges {
  restaurantFormGroup: FormGroup;
  apiList: any;
  apiCreate: any;
  apiDelete: any;
  @Input() public restaurant;
  @Output() notifyParent: EventEmitter<any> = new EventEmitter();
  constructor(
    private Apiconnection: ApiconnectionService,
    fb: FormBuilder
  ) {
    this.restaurantFormGroup = fb.group({
      name: [''],
      url: ['']
    });
  }
  sendRestaurants() {
    this.apiList = this.Apiconnection
      .doList()
      .subscribe((data: Restaurant[]) => this.notifyParent.emit(data));
  }
  ngOnInit() {}
  ngOnDestroy() {
    this.apiList.unsubscribe();
    this.apiCreate.unsubscribe();
    this.apiDelete.unsubscribe();
  }
  ngOnChanges() {
    if (this.restaurant === undefined) {
      return;
    }
    this.restaurantFormGroup.setValue({
      name: this.restaurant.name,
      url: this.restaurant.url
    });
  }
  saveRestaurant(restaurant): void {
    const updatedSaveRestaurant = this.restaurantFormGroup.value;
    this.apiCreate = this.Apiconnection
      .doCreate({
        ...restaurant,
        ...updatedSaveRestaurant
      })
      .subscribe((data: CreateRestaurant) => this.sendRestaurants());
  }
  deleteRestaurant(restaurant): void {
    if (confirm('Are you sure to delete ' + restaurant.name)) {
      const updatedDeleteRestaurant = this.restaurantFormGroup.value;
      this.apiDelete = this.Apiconnection
        .doDelete({
          ...restaurant,
          ...updatedDeleteRestaurant
        })
        .subscribe((data: DeleteRestaurant) => {
          this.restaurant = undefined;
          this.sendRestaurants();
        });
    }
  }
}
