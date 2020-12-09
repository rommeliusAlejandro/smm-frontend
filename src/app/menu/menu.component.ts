import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];

  constructor(private router: Router) {
  }

  ngOnInit() {

    this.items = [
      {
        label: 'Participants',
        icon: 'pi pi-users',
        command: (event) => this.navigate('/participants')
      },
      {
        label: 'Programs',
        icon: 'pi pi-book',
        command: (event) => this.navigate('/programs')
      },
      {
        label: 'Monthly Programs',
        icon: 'pi pi-calendar',
        command: (event) => this.navigate('/monthlyPrograms')
      }
    ];

  }
  async navigate(route: string) {
    await this.router.navigate([route]);
  }

}
