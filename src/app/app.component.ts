import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TodoSchedular';
  tasks: string[] = []

  onSubmit(event: any) {
    this.tasks.push(event.target.value);
    event.target.value = null;
  }

  removeTask(event: any) {
    this.tasks.shift();
    event.target.value = null;
  }

}
