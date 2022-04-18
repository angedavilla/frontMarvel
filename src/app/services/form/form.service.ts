import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  public formCharacter(): FormGroup {
    return new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      ciudad: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      imagen: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      poderes: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      situacion : new FormControl('', [Validators.required, Validators.maxLength(255)]),
      categoria : new FormControl('', [Validators.required, Validators.maxLength(255)]),
    });
  }

  public formCharacterUpdate(): FormGroup {
    return new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      ciudad: new FormControl('', [Validators.required, Validators.maxLength(255)]),
    });
  }
}
