import { Component, OnInit, Sanitizer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { About } from 'src/app/core/model/about/about';
import { AboutUsService } from 'src/app/services/about-us/about-us.service';

@Component({
  selector: 'app-about-home',
  templateUrl: './about-home.component.html',
  styleUrls: ['./about-home.component.css']
})
export class AboutHomeComponent implements OnInit {

  src="http://localhost:8080/s/file/image/1693381530364_gym.mp4";
   about : About = new About();
  des:any;
  linkvideo:any;
   constructor( private about_usService: AboutUsService , private sanitizer: DomSanitizer){}
   ngOnInit(): void {
     this.getistAllInformation()
   }
 
   getistAllInformation(){
     this.about_usService.getAllInformation().subscribe(res=>{
        this.about= res;
        this.des = this.sanitizer.bypassSecurityTrustHtml(this.about.description);
        this.linkvideo = this.sanitizer.bypassSecurityTrustHtml(this.about.videoLINK)
     })
   }

}
