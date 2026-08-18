import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './app.routes';

interface MenuItem {
  title: string;
  submenus: {
    title: string;
    url: string;
  }[];
}

function createMenuTitle(route: string) {
  return route
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function createMenuItems(routes: Routes): MenuItem[] {
  return routes.map((route) => {
    const title = createMenuTitle(route.path!);

    const submenus = route.children!.map((childRoute) => {
      const title = createMenuTitle(childRoute.path!);
      const url = `${route.path}/${childRoute.path!}`;

      return {
        title,
        url,
      };
    });

    return {
      title,
      submenus,
    };
  });
}

@Component({
  selector: 'app-root',
  imports: [FormsModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  menu = signal(createMenuItems(routes));
}
