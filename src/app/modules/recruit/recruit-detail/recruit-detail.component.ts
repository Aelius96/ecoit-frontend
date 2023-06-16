import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Recruit } from 'src/app/core/model/recruit/recruit';
import { RecruitService } from 'src/app/services/recruit/recruit.service';

@Component({
  selector: 'app-recruit-detail',
  templateUrl: './recruit-detail.component.html',
  styleUrls: ['./recruit-detail.component.css']
})
export class RecruitDetailComponent implements OnInit {
  
  url: any;
  content:any;
  roll:any;
  recruit: Recruit= new Recruit();

  constructor(private recruitService: RecruitService,
              private route: ActivatedRoute,
              private sanitizer : DomSanitizer){}


  ngOnInit(): void {
   this.getList();
  }

  getList(){
    this.url= this.route.snapshot.params['url'];
    this.recruitService.getRecruitUrl(this.url).subscribe(data=>{
      this.recruit=data;
      document.title = this.recruit.title;
      this.content = this.sanitizer.bypassSecurityTrustHtml(this.recruit.content);
    })
  }
}
