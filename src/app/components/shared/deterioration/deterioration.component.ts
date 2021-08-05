import { Component } from '@angular/core';

@Component({
  selector: 'app-deterioration',
  templateUrl: './deterioration.component.html',
  styleUrls: ['./deterioration.component.scss']
})
export class DeteriorationComponent {

  choices = [
    {text: 'Silica Gel', image: '/assets/images/deterioration-0.jpg', description: 'หากเสื่อมคุณภาพจะเปลี่ยนจากสีน้ำเงินเป็นสีชมพูหรือสีดำ'},
    {text: 'ซีลยาง', image: '/assets/images/deterioration-1.jpg', description: 'หากเสื่อมคุณภาพ ซีลยางชำรุดน้ำมันไหลซึมออกมา'},
    {text: 'ถังหม้อแปลง', image: '/assets/images/deterioration-2.jpg', description: 'หากเสื่อมคุณภาพ ถังหม้อแปลงจะขึ้นสนิม ผุ ชำรุด'},
    {text: 'อาร์คซิ่งฮอน', image: '/assets/images/deterioration-3.jpg', description: 'หากเสื่อมคุณภาพ อาร์คซิ่งฮอนชำรุด/บิดงอไม่ได้ระยะ (15.5 ซม.)'},
    {text: 'ปะเก็น', image: '/assets/images/deterioration-4.jpg', description: ' ปะเก็นกรอบ/หมดสภาพหรือชำรุดน้ำมันจะไหลซึมออกมา'},
    {text: 'บุชชิ่งแรงสูง - แรงต่ำ', image: '/assets/images/deterioration-5.jpg', description: 'บุชชิ่งแรงสูง - แรงต่ำ บิ่น/แตก ชำรุด หรือมีฝุ่นเกาะหนา อาจเป็นตัวนำให้ไฟรั่วลงดินทำให้ไฟดับได้'},
    {text: 'ถังอะไหล่น้ำมัน', image: '/assets/images/deterioration-6.jpg', description: 'ถังอะไหล่น้ำมันหม้อแปลงมีระดับน้ำมันต่ำจะต้องเติมน้ำมันเพิ่ม'},
    {text: 'ครีบระบายความร้อน', image: '/assets/images/deterioration-7.jpg', description: 'หากเสื่อมคุณภาพ ครีบระบายความร้อนสกปรก/รั่วซึม'},
    {text: 'ขั้วต่อแรงสูง - แรงต่ำ', image: '/assets/images/deterioration-8.jpg', description: 'ขั้วต่อสายแรงสูง - แรงต่ำ ที่บุชชิ่งหลวมหรือเกิดอ๊อกไซด์จะทำให้เกิดอาร์คชำรุด'},
    {text: 'ค่าความเป็นฉนวน', image: '/assets/images/deterioration-9.jpg', description: 'ค่าความเป็นฉนวนของน้ำมันต่ำกว่าพิกัด จะต้องกรองหรือเปลี่ยนทันที'},
  ]

  selected: number = 0;

  onSelectClick(index: number) {
    this.selected = index;
  }

  buttonClass(index: number) {
    if(index == this.selected) {
      return 'btn btn-danger btn-rounded';
    } else {
      return 'btn btn-outline-danger btn-rounded';
    }
  }

  spanClass(index: number) {
    if(index == this.selected) {
      return 'fs-5';
    } else {
      return 'text-dark fs-5';
    }
  }

}
