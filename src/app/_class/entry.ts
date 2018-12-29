export class Entry {
    constructor({id, path, title, duration}={id:1,path:"string",title:"string",duration:-1}){
        Object.assign(this,{id, path, title, duration});
    }
    // constructor({
    //     public id:number,
    //     public path:string,
    //     public title:string,
    //     public duration:number,
    // }){}
}
