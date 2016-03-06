module app.domain {
    export interface ICategory {
        categoryId: number;
        categoryName: string;
        description: string;
        imageUrl: string;
    }
    export class Category implements ICategory {
        constructor(public categoryId: number,
            public categoryName: string,
            public description: string,
            public imageUrl: string) {

        }
     }
}