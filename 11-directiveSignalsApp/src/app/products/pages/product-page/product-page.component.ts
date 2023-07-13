import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent {
  // constructor(private fb: FormBuilder) {}
  private fb = inject(FormBuilder);

  public color: string = 'red';

  public productForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(6), Validators.email]],
  });

  changeColor() {
    const color = '#xxxxxx'.replace(/x/g, y => ((Math.random() * 16) | 0).toString(16));

    this.color = color;
  }
}
