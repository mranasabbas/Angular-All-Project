import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-ng-content',
    templateUrl: './ngContent.component.html'
})

export class ngContentComponent {

    @Input() users: { id: number; name: string; age: number; gender: string; }[] | undefined;

}