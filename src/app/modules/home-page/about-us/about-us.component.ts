import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { About } from 'src/app/core/model/about/about';
import { AboutUsService } from 'src/app/services/about-us/about-us.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {

  about : About = new About();
  content:any
   constructor( private about_usService: AboutUsService , private sanitizer: DomSanitizer){}
   ngOnInit(): void {
     this.getistAllInformation()
   }
 
   getistAllInformation(){
     this.about_usService.getAllInformation().subscribe(res=>{
        this.about= res;
        this.content = this.sanitizer.bypassSecurityTrustHtml(this.about.content);
     })
   }


}
