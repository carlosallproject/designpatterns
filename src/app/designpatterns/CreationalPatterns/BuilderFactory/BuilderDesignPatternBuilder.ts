import { DesignPattern } from "../../../model/DesignPattern";
import { DesignPatternInterface } from "../../../model/DesignPatternInterface";
import { DesignPatternTypeInterface } from "../../../model/DesignPatternTypeInterface";
import { BaseBuilder } from "./BaseBuilder";



export class BuilderDesignPatternBuilder extends BaseBuilder{

  private namePattern: string;
  private descriptionPattern: string;
  private typePattern: DesignPatternTypeInterface;

  constructor(){
    super();
  }

  public set name(name: string){
    this.namePattern = name;
  }

  public set description(description: string){
    this.descriptionPattern = description;
  }

  public set type(type: DesignPatternTypeInterface){
    this.typePattern = type;
  }

  public build(): DesignPatternInterface{
    return new DesignPattern(this.namePattern,this.descriptionPattern,this.typePattern);
  }

}
