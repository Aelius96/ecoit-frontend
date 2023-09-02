import { Component } from '@angular/core';

@Component({
  selector: 'app-typical-customers',
  templateUrl: './typical-customers.component.html',
  styleUrls: ['./typical-customers.component.css']
})
export class TypicalCustomersComponent {


  customers = [
    {
      id: 1,
      customerImage: 'https://ecoit.asia/wp-content/uploads/2019/08/vpbank.jpg',
    },
    {
      id: 2,
      customerImage: 'https://ecoit.asia/wp-content/uploads/2019/08/viettel.jpg',
    },
    {
      id: 3,
      customerImage: 'https://ecoit.asia/wp-content/uploads/2019/08/truyenthonghn.jpg'
    },
    {
      id: 4,
      customerImage: 'https://ecoit.asia/wp-content/uploads/2019/08/thanhtra.jpg'
    },
    {
      id: 5,
      customerImage: 'https://ecoit.asia/wp-content/uploads/2019/08/tainguyenmoitrg.jpg'
    },
    {
      id: 6,
      customerImage: 'https://ecoit.asia/wp-content/uploads/2019/08/quochuy.jpg'
    },
    {
      id: 7,
      customerImage: 'https://ecoit.asia/wp-content/uploads/2019/08/quanlithitrg.jpg'
    },
    {
      id: 8,
      customerImage: 'https://ecoit.asia/wp-content/uploads/2019/08/huyhieucongan.jpg'
    },
    {
      id: 9,
      customerImage: 'https://ecoit.asia/wp-content/uploads/2019/08/cucthuongmaidt-01-1.jpg'
    },
    {
      id: 10,
      customerImage: 'https://ecoit.asia/wp-content/uploads/2019/08/evn.jpg'
    },
    {
      id: 11,
      customerImage: 'https://ecoit.asia/wp-content/uploads/2019/08/bokhoahoccn.jpg'
    },

  ]
}
