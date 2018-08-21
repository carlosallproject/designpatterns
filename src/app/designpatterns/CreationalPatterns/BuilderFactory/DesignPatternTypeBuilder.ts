import { BaseBuilder } from "./BaseBuilder";
import { DesignPattern } from "../../../model/DesignPattern";
import { DesignPatternInterface } from "../../../model/DesignPatternInterface";
import { DesignPatternTypeInterface } from "../../../model/DesignPatternTypeInterface";
import { DesignPatternType } from "../../../model/DesignPatternType";


export class DesignPatternTypeBuilder extends BaseBuilder{

  private nameTypePattern: string;
  private descriptionTypePattern: string;
  private designPatternsArray: Array<DesignPatternInterface>;

  constructor() {
    super();
    this.designPatterns = [];
  }

  public set name(name: string){
    this.nameTypePattern = name;
  }

  public set description(description: string){
    this.descriptionTypePattern = description;
  }

  public set designPattern(designPattern: DesignPattern){
    this.designPatternsArray.push(designPattern);
  }

  public set designPatterns(designPatterns: Array<DesignPattern>){
    this.designPatternsArray = this.designPatternsArray.concat(designPatterns);
  }

  public build(): DesignPatternTypeInterface{
    return new DesignPatternType(this.nameTypePattern,this.descriptionTypePattern,this.designPatternsArray);
  }
}
