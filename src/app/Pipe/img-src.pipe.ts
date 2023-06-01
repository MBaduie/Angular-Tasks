import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgSrc'
})
export class ImgSrcPipe implements PipeTransform {

  transform(value: string , defultUrl:string): string {
    if(!value || value === "")
    {
      return defultUrl
    }

    return value
  }

}
