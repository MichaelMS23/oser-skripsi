import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-project-component',
    templateUrl: 'projects.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {

}
