import { Entry } from './entry';

export class Playlist {
    constructor(
        public id:number,
        public title:string,
        public creado:string,
        public entries?:Entry[]
    ){}
}
