import { DesignEntity } from "./DesignEntity";
import { DesignPatternInterface } from "./DesignPatternInterface";

export interface DesignPatternTypeInterface extends DesignEntity{

    name: string;
    description: string;
    designPatterns: DesignPatternInterface[];
}