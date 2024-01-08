import { Pipe, PipeTransform } from "@angular/core";

@Pipe ({
    name: 'demoPipe'
})

export class demoPipe implements PipeTransform{

    transform(value: any, ...args: any[]) {
        return null
    }
    
}