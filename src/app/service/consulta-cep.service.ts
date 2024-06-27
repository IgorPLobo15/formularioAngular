import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {
  url_API ='https://viacep.com.br/ws/'
  constructor() { }
}
