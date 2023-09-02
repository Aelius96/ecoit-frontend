import { Component } from '@angular/core';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent {

  icons =[
    {
      id :1,
      link:'# ',
      imageUrl:'https://ecoit.asia/wp-content/uploads/2019/08/ECM-01-250x200.png',
      title:'EcoECM',
      content:'Phần mềm quản lý tài liệu'

    },
    {
      id:2,
      link: '# ',
      imageUrl:'https://ecoit.asia/wp-content/uploads/2020/11/kisspng-computer-icons-invoice-receipt-commerce-portfolio-5ac9a4a2354d51.3098672615231643222183-250x200.png',
      title:'ECO-INVOICE',
      content:'Phần mềm hóa đơn điện tử ECO –  Invoice'

    },
    {
      id:3,
      link: ' #',
      imageUrl:'https://ecoit.asia/wp-content/uploads/2019/08/OCR-250x200.png',
      title:'EcoOCR',
      content:'Phần mềm nhận dạng, bóc tách văn bản tiếng Việt'
    },
    
    {
      id:4,
      link: ' #',
      imageUrl:'https://ecoit.asia/wp-content/uploads/2019/08/BI-01-250x200.png',
      title:'Business Intelligence (BI)',
      content:'Hệ thống phân tích dữ liệu và quản trị thông minh'
    },
    

  ]
}
