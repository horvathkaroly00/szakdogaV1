import { Component } from "@angular/core";

@Component({
    selector: 'app-item-card',
    //template: `<h1>Item Card</h1>`,
    templateUrl: 'item-card.component.html',
    //styles: [`h1{font-weight: normal;}`]
    styleUrls: ['item-card.component.css']
}
)
export class ItemCardComponent{
    Item: any = {
        "Id": 1,
        "Name": "Antisocial Social Club hoodie",
        "Type": "Hoodies",
        "Price": 100 + "€",
        "Place": "Stockholm",
    }
}