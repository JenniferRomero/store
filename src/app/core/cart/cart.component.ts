import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart/cart.service';
import { Productos } from 'src/app/shared/services/categories/productos';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  // <!-- nuevo -->
  public productosList: Array<Productos>;
  public totalPrecio = 0;
  public totalCantidad = 0;


  constructor(private cartService:CartService) { }

  ngOnInit() {
    this.cartService.currentDataCart$.subscribe(resp=>{
      if(resp) {
        this.productosList = resp;
        this.totalCantidad = resp.length;
        this.totalPrecio = resp.reduce((sum, current) => sum + (current.precio * current.cantidad), 0);
      }
    });
  }

  public remove(producto:Productos) {
   this.cartService.removeElementCart(producto);
  }

}
