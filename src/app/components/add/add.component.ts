import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IHerosvillains } from '../../interfaces/i-herosvillains';
import { FormService } from '../../services/form/form.service';
import { MarvelService } from '../../services/marvel/marvel.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  @Input() public herosVillains: Array<IHerosvillains>;

  public form: FormGroup;

  constructor(
    private marvelService: MarvelService,
    private formService: FormService,
    private router: Router
  )  { 
    this.form = this.formService.formCharacter();
  }

  ngOnInit(): void {
  }

  saveData() {
    const data:  IHerosvillains = {
      nombre: this.form.controls['nombre'].value,
      ciudad: this.form.controls['ciudad'].value,
      imagen: this.form.controls['imagen'].value,
      poderes: this.form.controls['poderes'].value,
      situacion: this.form.controls['situacion'].value,
      categoria : this.form.controls['categoria'].value
    }; 
    

    this.marvelService.addHerosVillains(data).then((res: any) => {
      this.router.navigate(['/list']);
      console.log(res);
    });

  }

}
