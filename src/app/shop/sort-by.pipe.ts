import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy',
  pure: false
})
export class SortByPipe implements PipeTransform {

  transform(array: any, criteria: string): any[] {
    console.log(criteria)
    if(criteria==='hightolow'){
      return array.sort((a,b)=>{
        let firstElement = a.price.doubleValue
        let secondElement = b.price.doubleValue
        return secondElement-firstElement
      })
    }else if(criteria==='lowtohigh'){
      return array.sort((a,b)=>{
        let firstElement = a.price.doubleValue
        let secondElement = b.price.doubleValue
        return firstElement-secondElement
      })
    }else{
      return array
    }

  }
}
