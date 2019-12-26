import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { MultiplicarAction, DividirAction } from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {
  contador: number;

  constructor( private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('contador').subscribe(contador => this.contador = contador);
  }

  multiplicar() {
    // this.contador = this.contador * 2;
    // this.cambioContador.emit(this.contador);
    const action = new MultiplicarAction(5);
    this.store.dispatch(action);
  }

  dividir() {
    // this.contador = this.contador / 2;
    // this.cambioContador.emit(this.contador);
    const action = new DividirAction(2);
    this.store.dispatch(action);
  }

}
