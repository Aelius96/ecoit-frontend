import { Component, getNgModuleById } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Module } from 'src/app/core/model/module/module';
import { ModuleService } from 'src/app/services/module/module.service';
import { NumberService } from 'src/app/services/number-typical/number.service';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-module-add',
  templateUrl: './module-add.component.html',
  styleUrls: ['./module-add.component.css'],
})
export class ModuleAddComponent {
  allIcon: any;
  id:number
  module : Module = new Module()
  moduleById : Module = new Module()
  formModule = new FormGroup({
    name: new FormControl('', Validators.required),
    url: new FormControl('', Validators.required),
    icons: new FormControl('', Validators.required),
  });
  constructor(
    private numberService: NumberService,
    private router: Router,
    private moduleService: ModuleService,
    private toast : ToastService,
    private route : ActivatedRoute
  ) {}
  ngOnInit() {
    this.id=this.route.snapshot.params['id']
    this.getNgModuleById(this.id)
    if(this.id){
      this.getNgModuleById(this.id)
    }
    this.getIcon();
  }
  onSubmit() {
    this.module.name = this.formModule.controls['name'].value;
    this.module.url = this.formModule.controls['url'].value;
    this.module.icon = this.formModule.controls['icons'].value;
    this.module.id = this.id
    if(this.id){
      this.updateModule(this.module)
    }
    else{
    this.addModule(this.module);
    }
  }

  addModule(module:Module) {
    this.moduleService.addModule(module).subscribe((data) => {
      this.toast.showSuccess();
      this.rollbackToList();
    },
      (error)=>{
        this.toast.showWarning(error.error)
      }
    );
  }
  updateModule(module:Module){
    this.moduleService.updateModule(module).subscribe(data=>{
      this.toast.showUpdate();
      this.rollbackToList()
    },
    (error)=>{
      this.toast.showWarning(error.error)
    });
  }
  getIcon() {
    this.numberService.getListIconJson('icon.json').subscribe((data) => {
      this.allIcon = data;
    });
  }
  getNgModuleById(id:number){
    this.moduleService.getModuleById(id).subscribe(data=>{
      this.moduleById=data
      console.log(data)
      this.formModule.controls['name'].setValue(this.moduleById.name)
      this.formModule.controls['url'].setValue(this.moduleById.url)
      this.formModule.controls['icons'].setValue(this.moduleById.icon)
    })
  }
  rollbackToList() {
    this.router.navigate(['/admin/module']);
  }
}
