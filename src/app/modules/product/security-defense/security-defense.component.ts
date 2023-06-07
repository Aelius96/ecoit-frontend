import { Component } from '@angular/core';

@Component({
  selector: 'app-security-defense',
  templateUrl: './security-defense.component.html',
  styleUrls: ['./security-defense.component.css']
})
export class SecurityDefenseComponent {

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
      imageUrl:'https://ecoit.asia/wp-content/uploads/2019/08/PORTAL-01-250x200.png',
      title:'EcoPORTAL',
      content:'Hệ thống cổng thông tin điện tử tích hợp'
    },
    {
      id:5,
      link: ' #',
      imageUrl:'https://ecoit.asia/wp-content/uploads/2017/08/GOV-01-250x200.png',
      title:'EcoGOV',
      content:'Hệ thống dịch vụ công trực tuyến'
    },
    {
      id:6,
      link: ' #',
      imageUrl:'https://ecoit.asia/wp-content/uploads/2019/08/MAIL-01-250x200.png',
      title:'EcoMAIL',
      content:'Hệ thống thư điện tử dung lượng lớn'
    },
    {
      id:7,
      link: ' #',
      imageUrl:'https://ecoit.asia/wp-content/uploads/2019/08/OFFICE-01-250x200.png',
      title:'EcoOFFICE',
      content:'Hệ thống quản lý công văn và điều hành tác nghiệp'
    }

  ]
}
