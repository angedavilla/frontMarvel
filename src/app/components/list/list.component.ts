import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../services/marvel/marvel.service';
import { IHerosvillains } from '../../interfaces/i-herosvillains';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public searchText: any;

  public caracters: any ;
  public deleteCaracters: any = [];;

  constructor(
    private MarvelService: MarvelService,
    private router: Router
  )   { }

  ngOnInit(): void {
    this.MarvelService.getHerosVillains().then((res: any) => {
      this.caracters = res;
      console.log(this.caracters);
    });
  }

  deleteCharacter(id: number){
    this.MarvelService.deleteHerosVillains(id).then((res: any) => {
      this.MarvelService.getHerosVillains().then((res: any) => {
        this.caracters = res;
        console.log(this.caracters);
      });
    });
  }

  editCharacter(id: number){
    this.router.navigate(['/edit/', id]);
  }

}
