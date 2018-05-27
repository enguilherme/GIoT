import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()

export class EnergyService {

  constructor(public http: HttpClient) {}

  getEnergyInstant() {
    return this.http.get(`http://giot.com.br:1880/energia`)
    .pipe(map(res => res))
  }
}