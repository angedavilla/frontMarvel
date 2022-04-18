import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {url} from '../../config/i-url';
import {IHerosvillains} from '../../interfaces/i-herosvillains';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  constructor(private http: HttpClient) { }

  public getHerosVillains(): Promise<IHerosvillains> {
    return new Promise((resolve, reject) => {
      this.http.get<IHerosvillains>(`${url}/api`).subscribe((res: IHerosvillains) =>{
        resolve(res);
      });
    })
  }

  public getHerosVillainsById(id: number): Promise<IHerosvillains> {
    return new Promise((resolve, reject) => {
      this.http.get<IHerosvillains>(`${url}/api/${id}`).subscribe((res: IHerosvillains) =>{
        resolve(res);
      });
    })
  }

  public addHerosVillains(data: IHerosvillains): Promise<IHerosvillains> {
    return new Promise((resolve, reject) => {
      this.http.post<IHerosvillains>(`${url}/api`, data).subscribe((res: IHerosvillains) =>{
        resolve(res);
      });
    });
  }


  public updateHerosVillains(id: number, data: IHerosvillains): Promise<IHerosvillains> {
    return new Promise((resolve, reject) => {
      this.http.put<IHerosvillains>(`${url}/api/${id}`, data).subscribe((res: IHerosvillains) =>{
        resolve(res);
      });
    });
  }

  public deleteHerosVillains(id: number): Promise<IHerosvillains> {
    return new Promise((resolve, reject) => {
      this.http.delete<IHerosvillains>(`${url}/api/${id}`).subscribe((res: IHerosvillains) =>{
        resolve(res);
      });
    });
  }

}
