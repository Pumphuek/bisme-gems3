import { Component } from '@angular/core';
import { slideInOut } from 'src/app/animations/slide-in-out';
import { detail } from 'src/app/models/detail.model';
import { product } from 'src/app/models/product.model';


@Component({
  selector: 'app-page-service-transformer-main',
  templateUrl: './page-service-transformer-main.component.html',
  styleUrls: ['./page-service-transformer-main.component.scss']
})
export class PageServiceTransformerMainComponent {

  details: detail[] = [
    {
      headerText: 'เพิ่มประสิทธิภาพ', 
      description: `เพิ่มประสิทธิภาพในการจ่ายไฟได้อย่างเต็มพิกัด`, 
      imageSource: '/assets/images/i-page-service-transformer-0.png'
    },
    {
      headerText: 'ลดการขัดข้อง', 
      description: `ลดการเกิดความผิดปกติที่เกิดขึ้น`, 
      imageSource: '/assets/images/i-page-service-transformer-1.png'
    },
    {
      headerText: 'ช่วยยืดอายุการใช้งาน', 
      description: `ช่วยยืดอายุการใช้งานของหม้อแปลงให้ใช้ได้นานขึ้น`, 
      imageSource: '/assets/images/i-page-service-transformer-2.png'
    },
  ]

  products: product[] = [
    {
      productName: 'แพ็กเกจ TR1',
      descriptions: ['ระบบ 1 หรือ 3 เฟส', 'ขนาดไม่เกิน 250 kVA'],
      price: 3500
    },
    {
      productName: 'แพ็กเกจ TR2',
      descriptions: ['ระบบ 3 เฟส', 'ขนาดมากกว่า 250 - 1,500 kVA'],
      price: 7500
    },
    {
      productName: 'แพ็กเกจ TR3',
      descriptions: ['ระบบ 3 เฟส', 'ขนาดมากกว่า 1,500 kVA'],
      price: 9500
    },
  ]

}
