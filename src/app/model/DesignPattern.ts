import { DesignEntity } from "./DesignEntity";
import { DesignPatternInterface } from "./DesignPatternInterface";
import { DesignPatternTypeInterface } from "./DesignPatternTypeInterface";

export class DesignPattern extends DesignEntity implements DesignPatternInterface {

    name: string;
    description: string;
    type: DesignPatternTypeInterface;


    constructor(private _name: string, private _description: string, private _type: DesignPatternTypeInterface){
        super();
        this.name = _name;
        this.description = _description;
        this.type = _type;
    }

}
