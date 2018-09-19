import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('test name', 'test description', 'https://via.placeholder.com/350x350'),
    new Recipe('test name 2', 'test description', 'https://via.placeholder.com/350x350'),
    new Recipe('test name 3', 'test description 3', 'https://via.placeholder.com/350x350'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
