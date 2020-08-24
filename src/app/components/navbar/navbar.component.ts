import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public genres: any[];
  public query: ''
  constructor() {
    this.genres = ['Comedy', 'Thriller', 'Action', 'Crime', 'Horror', 'Romance', 'Drama', 'Supernatural', 'Fantasy', 'Science-Fiction', 'Mystery', 'Adventure', 'Espionage']
  }

  ngOnInit(): void { }

  public change(event) {
    this.query = event.target.value;
  }
}