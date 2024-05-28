import { Component, HostListener } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  logoImage="./assets/images/logo2.png"

  header: HTMLElement | null = null;
  sticky: number = 0;

  ngOnInit(): void {
    this.header = document.getElementById('myHeader');
    if (this.header) {
      this.sticky = this.header.offsetTop;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.myFunction();
  }

  myFunction() {
    if (this.header) {
      if (window.pageYOffset > this.sticky) {
        this.header.classList.add('sticky');
      } else {
        this.header.classList.remove('sticky');
      }
    }
  }
}
