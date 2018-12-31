import { HttpParams, HttpHeaders } from '@angular/common/http';
import { isEmpty } from "lodash";

interface PaginationOptions {
    page?:number,
    perPage?:number,
    fields?:string[],
    expand?:string[],
    sort?:string,
    params?:HttpParams
}


export class Pagination {
    
    public page?:number;
    public perPage?:number;
    public fields?:string[];
    public expand?:string[];
    public sort?:string;
    public total?:number;
    public params?:HttpParams;

    constructor(fields?:PaginationOptions)
    {
        fields&&Object.assign(this,fields);
    }

    Params(){
        var p = this.params || new HttpParams();
        if(this.page) p = p.set('page',this.page.toString());
        if(this.perPage) p = p.set('per-page',this.perPage.toString());
        if(!isEmpty(this.fields)) p = p.set('fields',this.fields.join(','));
        if(!isEmpty(this.expand)) p = p.set('expand',this.expand.join(','));
        if(this.sort) p = p.set('sort',this.sort);
        return p;
    }

    toString() {
        return this.Params().toString();
    }

    Load(headers:HttpHeaders){
        this.total=parseInt(headers.get("X-Pagination-Total-Count"));
        this.page=parseInt(headers.get("X-Pagination-Current-Page"));
        this.perPage=parseInt(headers.get("X-Pagination-Per-Page"));
        // console.log(headers.get("X-Pagination-Page-Count"));
    }
}
