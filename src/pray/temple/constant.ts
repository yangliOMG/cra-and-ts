
interface facmes{
    id:string;
    ico:string;
    tname:string;
    name:string;
}
interface Facility{
    facility:facmes;
    bright:number;
    lightNum:number;
}
interface templeMaterial{
    id:string;
    name:string;
    content:string;
    tid:string;
    type:number;
}
export interface state{
    temple:{
        id:string;
        name:string;
        ico:string;
    },
    facility:Facility[];
    templeMaterial:templeMaterial[]
}