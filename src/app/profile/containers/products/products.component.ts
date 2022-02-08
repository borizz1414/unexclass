import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BuyProductComponent } from '../../shared/dialogs/buy-product/buy-product.component';
import { ProductDialogComponent } from '../../shared/dialogs/product-dialog/product-dialog.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  // Obtener tipo de usuario y luego mostrar lo que sea dependiendo del usuario
  constructor(public dialog: MatDialog) {}
  invitado = false;
  ngOnInit(): void {}
  getEvent(action) {
    if (action === 'Agregar' || action === 'Editar') {
      this.dialog.open(ProductDialogComponent, {
        width: '800px',
        data: action,
      });
    } else {
      this.dialog.open(BuyProductComponent, { width: '800px', data: action });
    }
  }
}
