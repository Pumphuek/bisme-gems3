import { Component } from '@angular/core';
import { slideInOut } from 'src/app/animations/slide-in-out';
import { service } from 'src/app/models/service.model';

@Component({
  selector: 'app-page-service-main',
  templateUrl: './page-service-main.component.html',
  styleUrls: ['./page-service-main.component.scss'],
  animations: [slideInOut()],
  //host: { '[@slide]': '' }
})
export class PageServiceMainComponent {
  serviceHeader: string = 'บริการหลักของเรา';
  serviceDescription: string = 'บริการด้านงานบำรุงรักษาระบบไฟฟ้าแบบครบวงจร';

  services: service[] = [
    {
      name: 'ตรวจสอบและ บำรุงรักษาหม้อแปลงไฟฟ้า',
      imageSource: '/assets/images/service-0.jpg',
      redirectTo: '/service/transformer',
    },
    {
      name: 'ตรวจสอบและ บำรุงรักษาตู้เมนสวิตช์ (MDB)',
      imageSource: '/assets/images/service-1.jpg',
    },
    {
      name: 'ตัดต้นไม้ใกล้แนวสายไฟฟ้า',
      imageSource: '/assets/images/service-2.jpg',
    },
    {
      name: 'ติดตั้งอุปกรณ์ป้องกัน',
      imageSource: '/assets/images/service-3.jpg',
    },
  ];

  details = [
    {
      name: 'ตรวจสอบและ บำรุงรักษาหม้อแปลงไฟฟ้า',
      descriptions: [
        `ตรวจสอบ ซ่อมแซม และบำรุงรักษาหม้อแปลงไฟฟ้าทุกประเภท เพื่อให้มั่นใจว่าหม้อแปลงไฟฟ้าของคุณสามารถทำงานได้
        อย่างมีเสถียรภาพและมีอายุการใช้งานที่ยาวนาน`
      ],
      imageSource: [
        '/assets/images/service-0-0.jpg',
        '/assets/images/service-0-1.jpg',
        '/assets/images/service-0-2.jpg',
      ],
    },
    {
      name: 'ตรวจสอบและ บำรุงรักษาตู้เมนสวิตช์ (MDB)',
      descriptions: [
        `เพื่อให้สามารถที่จะใช้งานระบบไฟฟ้าได้อย่างต่อเนื่อง ไม่ติดขัดหรือหยุดชะงักไปเพราะความบกพร่องของระบบไฟฟ้า 
        โดยเฉพาะอย่างยิ่งระบบไฟฟ้าหลักของอาคาร โรงงาน ต่างๆ เช่น ตู้เมนสวิทซ์บอร์ด ตู้คาปาซิเตอร์ การบำรุงตู้เมนสวิทซ์บอร์ด (MDB) 
        และตู้ย่อยไฟฟ้า (DB) คือการทำความสะอาดบริเวณรอบๆตู้ ภายในตู้ และทดสอบฟังก์ชั่นต่างๆของอุปกรณ์ภายในตู้ให้พร้อมใช้งานได้
        อย่างมีประสิทธิภาพอยู่เสมอ จำเป็นต้องบำรุงรักษาอย่างน้อยปีละ 1 ครั้ง เพื่อให้ลูกค้ามั่นใจในการใช้งานระบบไฟฟ้าในกิจการต่างๆ
        ได้อย่างต่อเนื่องและมีความปลอดภัยในการใช้งาน โดยระบบในการตรวจสอบที่ได้มาตรฐาน `
      ],
      imageSource: [
        '/assets/images/service-1-0.jpg',
        '/assets/images/service-1-1.jpg',
        '/assets/images/service-1-2.jpg',
      ],
    },
    {
      name: 'ตัดต้นไม้ใกล้แนวสายไฟฟ้า',
      descriptions: [
        `ต้นไม้กับสายไฟฟ้าสามารถอยู่ร่วมกันได้ หากแต่...ต้องตัดอย่างถูกวิธีต้นไม้จะเติบโตหลบสายไฟ
        การบริการตัดต้นไม้ใกล้แนว
        เสาไฟฟ้าของเราดำเนินการโดย ทีมงานรุกขกร ผู้เชี่ยวชาญที่มีความรู้ ความชำนาญในการตัดต้นไม้ตามแนวสายไฟให้เกิดความปลอดภัย
        ต่อชีวิตและทรัพย์สิน และยังคงความสวยงามของภูมิทัศน`,
        `หมายเหตุ : การตัดต้นไม้บริเวณสายไฟ แม้จะอยู่ภายในบริเวณบ้าน จำเป็นต้องดำเนินการโดยรุกขกรที่ได้รับการฝึกอบรม
        และมีใบรับรอง เพื่อความปลอดภัย ป้องกันไฟดับ`
      ],
      imageSource: [
        '/assets/images/service-2-0.jpg',
        '/assets/images/service-2-1.jpg',
        '/assets/images/service-2-2.jpg',
      ],
    },
    {
      name: 'ติดตั้งอุปกรณ์ป้องกัน',
      descriptions: [
        `มีสัตว์หลายชนิดที่เป็นสาเหตุให้เกิดไฟดับได้ เช่น งูเลื้อยขึ้นไปบนเสาไฟฟ้า และสายไฟฟ้า แมวหรือตุ๊กแกปีนขึ้นสู่อุปกรณ์ไฟฟ้า 
        หรืออาจะมีนกเกาะลูกถ้วย ทำให้เกิดกระแสไฟฟ้าลัดวงจรไหลผ่านตัวนกลงสู่ดิน ส่งผลทำให้อุปกรณ์ป้องกันทำงาน เป็นสาเหตุให้เกิดไฟฟ้าดับได้`,
        `เรามีบริการติดตั้งอุปกรณ์ป้องกันไฟดับที่เหมาะสมกับกิจการคุณ`
      ],
      imageSource: [
        '/assets/images/service-3-0.jpg',
        '/assets/images/service-3-1.jpg',
        '/assets/images/service-3-2.jpg',
      ],
    },
  ];
}
