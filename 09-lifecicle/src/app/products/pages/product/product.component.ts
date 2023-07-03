import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'product-page',
  templateUrl: './product.component.html',
  styles: [],
})
export class ProductComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  public isProductVisible: boolean = false;
  public currentPrice: number = 10;

  public changePrice(): number {
    return this.currentPrice++;
  }

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInt');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log({ changes });
    console.log('ngOnChanges');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}