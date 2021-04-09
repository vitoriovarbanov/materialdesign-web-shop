import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy',
  pure: false
})
export class SortByPipe implements PipeTransform {

  transform(array: any, criteria: string): any[] {
    //let items = Array.from(document.getElementsByClassName('card card'));
    //console.log(items)
   /*  if(criteria==='lowtohigh'){
    console.log(array)
      return array.sort((a,b)=>{
        let firstElement = a.childNodes[4].childNodes[3].firstChild.textContent.split('$')
        let secondElement = b.childNodes[4].childNodes[3].firstChild.textContent.split('$')
        return Number(firstElement[0]) - Number(secondElement[0])
      })
    } */
    console.log(criteria)
    if(criteria==='hightolow'){
      return array.sort((a,b)=>{
        let firstElement = a.price.doubleValue
        let secondElement = b.price.doubleValue
        return secondElement-firstElement
      })
    }else{
      return array.sort((a,b)=>{
        let firstElement = a.price.doubleValue
        let secondElement = b.price.doubleValue
        return firstElement-secondElement
      })
    }

  }
}
