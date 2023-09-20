import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-product',
  templateUrl: './customer-product.component.html',
  styleUrls: ['./customer-product.component.css']
})
export class CustomerProductComponent {
  customer =
    [{
      id: 1,
      backgroundColor:'#732dec',
      cusIcon: 'fa fa-bank',
      cusTitle: 'KHÁCH HÀNG CHÍNH PHỦ',
      cusDescription: 'Bao gồm các Bộ, Ban, Ngành và các cơ quan nhà nước khác',
      url:'khach-hang-chinh-phu',
      product:[
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

      }]
    },
    {
      id: 2,
      backgroundColor:'#673ab7',
      cusIcon: 'fa fa-slideshare',
      cusTitle: 'KHÁCH HÀNG DOANH NGHIỆP',
      cusDescription: 'Bao gồm các tập đoàn, doanh nghiệp lớn trong và ngoài nước',
      url:'khach-hang-doanh-nghiep',
      product: [{
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
          id:9,
          link: ' #',
          imageUrl:'https://ecoit.asia/wp-content/uploads/2019/08/BI-01-250x200.png',
          title:'Business Intelligence (BI)',
          content:'Hệ thống phân tích dữ liệu và quản trị thông minh'
        },
        ]
    },
    {
      id: 3,
      backgroundColor:'#6fbd66',
      cusIcon: 'fa fa-dollar',
      cusTitle: 'KHÁCH HÀNG TÀI CHÍNH-NGÂN HÀNG',
      cusDescription: 'Bao gồm các ngân hàng, công ty tài chính',
      url:'khach-hang-tai-chinh-ngan-hang',
      product: [
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
          id:8,
          link: ' #',
          imageUrl:'https://ecoit.asia/wp-content/uploads/2019/08/ESB-01-250x200.png',
          title:'ESB',
          content:'Giải pháp trục tích hợp'
        },
        {
          id:9,
          link: ' #',
          imageUrl:'https://ecoit.asia/wp-content/uploads/2019/08/BI-01-250x200.png',
          title:'Business Intelligence (BI)',
          content:'Hệ thống phân tích dữ liệu và quản trị thông minh'
        },
        {
          id:10,
          link: ' #',
          imageUrl:'https://ecoit.asia/wp-content/uploads/2019/08/ACUNETIX-01-250x200.png',
          title:'Acunetix',
          content:'Phần mềm kiểm toán an ninh Web'
        }
      ]
    },
    {
      id: 4,
      backgroundColor:'#bd9366',
      cusIcon: 'fa fa-shield',
      cusTitle: 'KHÁCH HÀNG AN NINH - QUỐC PHÒNG',
      cusDescription: 'Bao gồm các cơ quan, đơn vị thuộc Bộ Công An và Bộ Quốc Phòng',
      url:'khach-hang-an-ninh-quoc-phong',
      product: [{
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

        }]
    }]
}
