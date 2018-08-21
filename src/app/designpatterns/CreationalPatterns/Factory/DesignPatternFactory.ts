import { DesignPattern } from "../../../model/DesignPattern";
import { DesignPatternType } from "../../../model/DesignPatternType";
import { DesignPatternInterface } from "../../../model/DesignPatternInterface";
import { BuilderDesignPatternBuilder } from "../BuilderFactory/BuilderDesignPatternBuilder";
import { DesignPatternTypeBuilder } from "../BuilderFactory/DesignPatternTypeBuilder";

export class DesignPatternFactory {

  constructor(){

  }

  public createDesignPatternBuilder(): DesignPatternInterface{

    let builderPatternBuilder: BuilderDesignPatternBuilder = new BuilderDesignPatternBuilder();
    let builderTypePattern: DesignPatternTypeBuilder = new DesignPatternTypeBuilder();

    builderTypePattern.name = "Creational Pattern";
    builderTypePattern.description = ""

    builderPatternBuilder.name = "Builder";
    builderPatternBuilder.description = "The Builder pattern separates the construction of a complex object from its representation";

  }

}
