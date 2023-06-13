import { Component,Input ,OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ThemeProps } from '../types';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
  @Input() boxtheme:ThemeProps={color:"",backgroundColor:""}
  @Input("title") boxtitle:string=""
  features:any=[]
  constructor(private ds:DataService){
}
type(x:any):string{
  return typeof(x)
}
ngOnInit(): void {
    this.features = this.ds.getFeatures(this.boxtitle)
}

}
