import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormService } from 'src/app/services/form/form.service';
import { MarvelService } from '../../services/marvel/marvel.service';
import { IHerosvillains } from '../../interfaces/i-herosvillains';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Input() data: IHerosvillains;
  @Input() idCharacter : number;

  public herovilla: any = [];

  public form: FormGroup;

  constructor(
    private formService: FormService,
    private marvelService: MarvelService,
    private activeRouted: ActivatedRoute,
    private Router: Router
  )  
  {
    this.form = this.formService.formCharacterUpdate();
   }

  ngOnInit(): void {

    const idCharacter = this.activeRouted.snapshot.params['id'];
    console.log(idCharacter);

    this.marvelService.getHerosVillainsById(idCharacter).then((res: any) => {
      this.herovilla = res[0];
      console.log(this.herovilla);
    })

    // if (idCharacter) {
    //   this.marvelService.getHerosVillainsById(idCharacter).then((res: any) => {
    //     this.data = res.data;
    //     console.log(this.data);
    //   });
    // }

    // this.form.controls['nombre'].setValue(this.data.nombre);
    // this.form.controls['ciudad'].setValue(this.data.ciudad);
  }

  saveData() {
    const data:  IHerosvillains = {
      nombre: this.form.controls['nombre'].value,
      ciudad: this.form.controls['ciudad'].value,
    }; 
    

    this.marvelService.updateHerosVillains(this.idCharacter, data).then((res: any) => {
      this.Router.navigate(['/list']);
      console.log(res);
    });

  }

}
