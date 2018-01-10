import { Component } from '@angular/core';
import { Restaurant } from '../../model/restaurant';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ApiService } from '../../common/service/ApiService';

@Component({
    selector: 'app-restaurant-management',
    templateUrl: './restaurantManagement.component.html'
})
export class RestaurantManagementComponent implements OnInit {
    restaurant: Restaurant;
    titulo: String = 'asi nomas quedo';

    constructor(private apiServise: ApiService) {

    }

    ngOnInit(): void {
        this.restaurant = new Restaurant();
    }

    onSave() {
        debugger;
        this.restaurant.id = 0;
        this.restaurant.name = 'prueba del frontend';

        this.apiServise.addElement(this.restaurant)
            .subscribe(
            (response) => {

                debugger;
                console.log(response);
            },
            (error) => {
                debugger;
                console.log(error);
            }
            );
    }
}
