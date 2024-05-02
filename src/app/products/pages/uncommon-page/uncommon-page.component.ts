import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18n Select
  public name: string = 'Fernando';
  public gender: 'male' |'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  public changeClient(): void{
    if(this.gender === 'male'){
      this.gender = 'female';
      this.name = 'Melissa';
    }else{
      this.name = 'Fernando';
      this.gender = 'male'
    }
  }

  //i18n Plural
  public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Eduardo', 'Melisa', 'Juan', 'bebé']

  public clientMap: {[k:string]: string} = {
    '=0': '0 clientes',
    '=1': '1 cliente',
    '=2': '2 clientes',
    'other': '# clientes'
  }

  deleteClient(): void{
    this.clients.shift();
  }

  // KeyValue pipe
  public person = {
    name: 'Daniel',
    age: 25,
    address: 'Ottawa, Canada'
  }

  // Async Pipe
  public myObservableTimer = interval(2000).pipe(
    tap( value => console.log('tap', value))
  )

  public promiseValue: Promise<string> = new Promise(( resolve, reject) => {
    setTimeout(() => {
      resolve( 'Tenemos data en la promesa' )
    }, 3500)
  })

}
