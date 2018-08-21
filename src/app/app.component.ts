import { Component } from '@angular/core';
import { DesignPattern } from './model/DesignPattern'
import { DesignPatternInterface } from './model/DesignPatternInterface';
import { DesignPatternTypeInterface } from './model/DesignPatternTypeInterface';
import { DesignPatternType } from './model/DesignPatternType';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public arrayKnowDesignPatterns: Array<DesignPattern> = [];

  title = 'Test Patterns';


  public onTest(){
    var type: DesignPatternTypeInterface = new DesignPatternType("Creational","Para construir objetos",[]);
    var design1: DesignPatternInterface = new DesignPattern("Builder","Usado para construir objetos",type);

    console.log("Nome do design Pattern: ", design1.name);
    console.log("Descrição do design Pattern: ", design1.description);
    console.log("Tipo do design Pattern: ", design1.type);
  }
}

