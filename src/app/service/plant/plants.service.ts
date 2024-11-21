import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PlantsService {
  private apiUrl = '';
  constructor(private http: HttpClient) {}

  // Obtener la lista de plantas
  getPlants(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Obtener una planta por su ID
  getPlantById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Editar una planta
  updatePlant(id: number, plantData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, plantData);
  }

  // Eliminar una planta
  deletePlant(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
