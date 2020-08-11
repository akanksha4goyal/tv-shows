import {Genres} from './genres.model'
import {Image} from './image.model'
export class Shows{
    id: number;
    url: string;
    name: string;
    type: string;
    language: string;
    genres: string[];
    status:string;
    runtime: number;
    premierd: Date;
    officialSite:string;
    schedule:{};
    rating:{};
    weight:number;
    network:{};
    webChannel:{};
    externals:{};
    image:Image[];
    _links:{};
    summary:string;
    updated:number;
}