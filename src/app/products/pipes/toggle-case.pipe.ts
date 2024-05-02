import { Pipe, PipeTransform } from "@angular/core";

// daniel | toggleCase = 'DANIEL'
// DANIEL | toggleCase = 'daniel'

@Pipe({
  name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform{

  transform(value: string, toUpper: boolean = false): string {
    return ( toUpper )
      ? value.toUpperCase()
      : value.toLowerCase();
  }

}
