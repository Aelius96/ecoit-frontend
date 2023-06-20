import {Component, OnInit} from '@angular/core';
import {Recruit} from "../../../core/model/recuit/recuit";
import {Router} from "@angular/router";
import {RecruitService} from "../../../services/recruit/recruit.service";
import {TokenStorageService} from "../../../services/token-storage/token-storage.service";

@Component({
  selector: 'app-recruit-control',
  templateUrl: './recruit-control.component.html',
  styleUrls: ['./recruit-control.component.css']
})
export class RecruitControlComponent implements OnInit{

  recruitNewsList : Recruit [] = [];
  role: string;
  constructor(private router: Router, private recruitService:RecruitService, private tokenStorageService:TokenStorageService
  ) {}

  ngOnInit(): void {
    if(this.tokenStorageService.getToken()){
      this.listAll();
      const user = this.tokenStorageService.getUser();
      this.role =user.roles;

    }
  }

  listAll(){
    this.recruitService.listAll().subscribe(data=>{
      return this.recruitNewsList = data;
    })
  }

  updateRecruitNews(id: Number){
    return this.router.navigate([`/admin/recruit/update/${id}`])
  }

  deleteRecruitNews(id: number){
    let option = confirm("Dữ liệu sẽ bị xóa . Bạn có mốn tiếp tục ");

    if(option){
      this.recruitService.deleteRecruitNews(id).subscribe(data=>{
        this.recruitService.listAll();
      })
    }
  }
}
