import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {

  customer = [
    {
      id: 1,
      backgroundColor:'#732dec',
      cusIcon: 'fa fa-bank',
      cusTitle: 'KHÁCH HÀNG CHÍNH PHỦ',
      cusDescription: 'Bao gồm các Bộ, Ban, Ngành và các cơ quan nhà nước khác',
      url:'khach-hang-chinh-phu'
    },
    {
      id: 2,
      backgroundColor:'#673ab7',
      cusIcon: 'fa fa-slideshare',
      cusTitle: 'KHÁCH HÀNG DOANH NGHIỆP',
      cusDescription: 'Bao gồm các tập đoàn, doanh nghiệp lớn trong và ngoài nước',
      url:'khach-hang-doanh-nghiep'
    },
    {
      id: 3,
      backgroundColor:'#6fbd66',
      cusIcon: 'fa fa-dollar',
      cusTitle: 'KHÁCH HÀNG TÀI CHÍNH-NGÂN HÀNG',
      cusDescription: 'Bao gồm các ngân hàng, công ty tài chính',
      url:'khach-hang-tai-chinh-ngan-hang'
    },
    {
      id: 4,
      backgroundColor:'#bd9366',
      cusIcon: 'fa fa-shield',
      cusTitle: 'KHÁCH HÀNG AN NINH - QUỐC PHÒNG',
      cusDescription: 'Bao gồm các cơ quan, đơn vị thuộc Bộ Công An và Bộ Quốc Phòng',
      url:'khach-hang-an-ninh-quoc-phong'
    },
  ]
}
