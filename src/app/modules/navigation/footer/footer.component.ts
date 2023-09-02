import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/core/model/news/news';
import { NewsService } from 'src/app/services/news/news.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

newList: News[]=[]
constructor(private newService: NewsService) {
  
}
  ngOnInit(): void {
    this.getListNews()
  }
getListNews():void{
  this.newService.listAll().subscribe(data=>{
    return this.newList =data
  })
}

}

