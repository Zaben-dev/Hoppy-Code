import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Post } from '@hoppy-code/shared';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app';
  post!: Post;
}
