import { Component } from '@angular/core';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
  
})
export class LoaderComponent {

  isLoading = this.loaderServices.isLoading;

  constructor(private loaderServices: LoaderService) { }


}
