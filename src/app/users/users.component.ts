import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-users-component',
    templateUrl: 'users.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent {

}
