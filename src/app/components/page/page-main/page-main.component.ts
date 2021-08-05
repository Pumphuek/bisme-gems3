import { Component, OnInit } from '@angular/core';
import { slideInOut } from 'src/app/animations/slide-in-out';
import { service } from 'src/app/models/service.model';
import { detail } from 'src/app/models/detail.model';
import { review } from 'src/app/models/review.model';

@Component({
  selector: 'app-page-main',
  templateUrl: './page-main.component.html',
  styleUrls: ['./page-main.component.scss'],
  animations: [ slideInOut() ],
  //host: { '[@slide]': '' }
})
export class PageMainComponent implements OnInit {

  introTextHeader = `ผู้นำด้านงานบริการบำรุงรักษาระบบไฟฟ้า\n
    ด้วยแพลตฟอร์มบริหารจัดการงานบำรุงรักษา
  `

  introTextContent = `
    เราศึกษา วิเคราะห์ และแนะนำการบำรุงรักษาที่เหมาะสมตามลักษณะของลูกค้า
    เพื่อส่งมอบงานที่มีคุณภาพ ตรงตามความต้องการ ในราคามาตรฐาน
  `

  serviceHeader: string = 'บริการหลักของเรา'
  serviceDescription: string = 'บริการด้านงานบำรุงรักษาระบบไฟฟ้าแบบครบวงจร';

  services: service[] = [
    {name: 'ตรวจสอบและ บำรุงรักษาหม้อแปลงไฟฟ้า', imageSource: '/assets/images/service-0.jpg', redirectTo: '/service'},
    {name: 'ตรวจสอบและ บำรุงรักษาตู้เมนสวิตช์ (MDB)', imageSource: '/assets/images/service-1.jpg', redirectTo: '/service'},
    {name: 'ตัดต้นไม้ใกล้แนวสายไฟฟ้า', imageSource: '/assets/images/service-2.jpg', redirectTo: '/service'},
    {name: 'ติดตั้งอุปกรณ์ป้องกัน', imageSource: '/assets/images/service-3.jpg', redirectTo: '/service'},
  ]

  advantageHeader: string = 'ทำไมต้อง BiSME'
  advantageDescription: string = 'ไฟฟ้าคือหัวใจหลักในการทำงาน และเราคือผู้เชี่ยวชาญที่พร้อมดูแลระบบไฟฟ้าของคุณ มากกว่าความอุ่นใจ คือการบริการอย่างจริงใจ';

  advantages: detail[] = [
    {
      headerText: 'ลดปัญหาด้านระบบไฟฟ้า', 
      description: `เราตรวจสอบ แนะนำ และแก้ไขปัญหาของระบบไฟฟ้าที่เกิดจากการติดตั้ง การตั้งค่าอุปกรณ์ และสภาพแวดล้อมที่ไม่เหมาะสมตามหลักวิชาการที่ถูกต้อง`, 
      imageSource: '/assets/images/i-tr.png'
    },
    {
      headerText: 'ผู้ให้บริการมืออาชีพ', 
      description: `ทีมงานผู้ให้บริการผ่านการตรวจสอบและอบรมตามมาตรฐานของการไฟฟ้าส่วนภูมิภาค มีการประเมินผลงานประจำปี`, 
      imageSource: '/assets/images/i-technical-support.png'
    },
    {
      headerText: 'อุปกรณ์มีคุณภาพ', 
      description: `อุปกรณ์ที่นำมาใช้ปฏิบัติงานมีคุณภาพตรงตามมาตรฐานสากล และมีการสอบเทียบ (Calibrate) อย่างสม่ำเสมอ`, 
      imageSource: '/assets/images/i-natural-disaster.png'
    },
    {
      headerText: 'คุณภาพของบริการ', 
      description: `มีระบบตรวจสอบความจำเป็นในการบำรุงรักษา ทำให้คุณได้รับการดูแลตามมาตรฐานสากลอย่างต่อเนื่อง`, 
      imageSource: '/assets/images/i-growth.png'
    },
    {
      headerText: 'เลือกรับบริการได้อย่างยืดหยุ่น', 
      description: `เลือกวันและช่วงเวลาที่คุณสะดวกให้ทีมช่างเข้าให้บริการตามที่คุณต้องการได้เอง ผ่านอุปกรณ์หรือเจ้าหน้าที่ได้ตลอดเวลา`, 
      imageSource: '/assets/images/i-calendar.png'
    },
    {
      headerText: 'ติดต่อเราได้ตลอด 24 ชั่วโมง', 
      description: `หากลูกค้าพบปัญหา สามารถติดต่อ BiSME ได้ตลอด 24 ชั่วโมง`, 
      imageSource: '/assets/images/i-24hrs.png'
    },
  ]

  reviewHeader: string = "เสียงตอบรับจากลูกค้าของเรา"
  reviewDescription: string = "หม้อแปลงกว่า 160,000 เครื่องที่เราดูแลทั่วประเทศ "

  reviews: review[] = [
    {
      review: `การให้บริการ การให้คำแนะนำของทีมงานดีมาก
      ทีมงานที่เข้าปฎิบัติงานดีมาก ทำงานเรียบร้อย 
      อุปกรณ์เซฟตี้ก็ครบ ประทับใจมากครับ`,
      customerName: `ผู้จัดการ บริษัท เกียรติธนา ขนส่ง จำกัด (มหาชน)`,
      imageSource: '/assets/images/review-0.jpg'
    },
    {
      review: `ราคาแพ็กเกจสมเหตุสมผล
      และประทับใจการทำงาน ให้บริการไว
      ติดต่อได้สะดวกครับ`,
      customerName: `ผู้จัดการ บริษัท ระยองรัตนเซอร์วิสแอนด์ไฮดรอลิค จำกัด`,
      imageSource: '/assets/images/review-1.jpg'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
