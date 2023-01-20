import { Component } from '@angular/core';
import { ETheme } from '../../enum/ETheme.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public icon: any = ETheme.ICON_MOON ;
  public textTheme: any = ETheme.TEXT_MOON;

  public toggle(){
    const theme = document.body.classList.toggle('dark-theme');

    if(theme){
      this.textTheme = ETheme.TEXT_MOON;
      return (this.icon = ETheme.ICON_SUN);
    }

    this.textTheme = ETheme.TEXT_SUN;
    return (this.icon = ETheme.ICON_MOON);
  }
}
