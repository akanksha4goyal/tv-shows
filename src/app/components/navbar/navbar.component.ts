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
    this.genres = ['Action', 'Adventure', 'Comedy', 'Crime', 'Drama', 'Espionage', 'Fantasy', 'Horror', 'Mystery', 'Romance', 'Science-Fiction', 'Supernatural', 'Thriller', 'War']
  }

  ngOnInit(): void { }

  public change(event) {
    this.query = event.target.value;
  }
}