import { Dto } from "./dto";

interface INodeDto {
    id?: string;
    name?: string;
    parentId?: string;
}

export class NodeDto extends Dto<INodeDto> {
    public id?: string;
    public name?: string;
    public parentId?: string;
}
