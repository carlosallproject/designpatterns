import { DesignEntity } from "./DesignEntity";
import { DesignPatternTypeInterface } from "./DesignPatternTypeInterface";

export interface DesignPatternInterface extends DesignEntity{
    
    name: string;
    description: string;
    type: DesignPatternTypeInterface;

}