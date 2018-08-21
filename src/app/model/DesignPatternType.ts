import { DesignPatternInterface } from "./DesignPatternInterface";
import { DesignPatternTypeInterface } from "./DesignPatternTypeInterface";
import { DesignEntity } from "./DesignEntity";

export class DesignPatternType extends DesignEntity implements DesignPatternTypeInterface {

    name: string;
    description: string;
    designPatterns: DesignPatternInterface[];

    constructor(private _name: string, private _description: string, _designPatterns: DesignPatternInterface[]){
        super();
        this.name = _name;
        this.description = _description;
        this.designPatterns = _designPatterns;
    }

}