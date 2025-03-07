import { Component } from '@angular/core';
import { NavbarComponentComponent } from "./navbar-component/navbar-component.component";
import { BodyComponentComponent } from "./body-component/body-component.component";
import { FooterComponentComponent } from "./footer-component/footer-component.component";
import { MasterInformationComponentComponent } from "./master-information-component/master-information-component.component";

@Component({
  selector: 'app-view-number',
  standalone: true,
  imports: [NavbarComponentComponent, BodyComponentComponent, FooterComponentComponent, MasterInformationComponentComponent],
  templateUrl: './view-number.component.html',
  styleUrl: './view-number.component.scss'
})
export class ViewNumberComponent {
  GetDataApiJson = {

    masterInfo: {
      phoneNumber: '012345678910',
      statusSid: 1,
      statusNameAr: "قيد الاستخدام ",
      statusNameEn: "In use",
      protocolData: {
        nameAr: 'فودفون مصر',
        nameEn: 'Vodafone Egypt'
      },
      countryData: {
        nameAr: 'المملكة العربية السعودية',
        nameEn: 'Kingdom of Saudi Arabia',
        imageSrc: 'Ksaflag.png'
      },
      clientData: {
        nameAr: 'الشركة الالمانية لابادة الحشرات والقوارض',
        nameEn: 'German company for pest and rodent extermination',
        imageSrc: 'company-logo.png'
      },
      extensionsnumber: 9,
      lastShipmentDate: '2024/12/29',
      currencyData: {
        nameAr: 'ج.م',
        nameEn: 'EGP'
      },
      balance: '5000',
      usedBalanceForClient: '5000',
      usedBalanceForAllClient: '5000',
    },

    tableData: [
      {
        clientNameAr: 'الشركة الالمانية لابادة الحشرات والقوارض',
        clientNameEn: 'German company for pest and rodent extermination',
        dateOfAppointment: '01/12/2024',
        dateOfCancelAppointment: null,
        imageSrc: 'company-logo.png',
        appointmentOfficerAr: "عبد الرحيم أسماعيل ناصف",
        appointmentOfficerEn: "Abdul Rahim Ismail Nasef",
        localMinutes: 7654,
        InternationalMinutes: 122,
        amount: 61890,
      },
      {
        clientNameAr: 'الشركة الالمانية لابادة الحشرات والقوارض',
        clientNameEn: 'German company for pest and rodent extermination',
        dateOfAppointment: '15/03/2024',
        dateOfCancelAppointment: '20/03/2024',
        imageSrc: 'company-logo.png',
        appointmentOfficerAr: "عبد الرحيم أسماعيل ناصف",
        appointmentOfficerEn: "Abdul Rahim Ismail Nasef",
        localMinutes: 4321,
        InternationalMinutes: 87,
        amount: 45000,
      },
      {
        clientNameAr: 'الشركة الالمانية لابادة الحشرات والقوارض',
        clientNameEn: 'German company for pest and rodent extermination',
        dateOfAppointment: '22/07/2024',
        dateOfCancelAppointment: null,
        imageSrc: 'company-logo.png',
        appointmentOfficerAr: "عبد الرحيم أسماعيل ناصف",
        appointmentOfficerEn: "Abdul Rahim Ismail Nasef",
        localMinutes: 1234,
        InternationalMinutes: 45,
        amount: 32000,
      },
      {
        clientNameAr: 'الشركة الالمانية لابادة الحشرات والقوارض',
        clientNameEn: 'German company for pest and rodent extermination',
        dateOfAppointment: '10/05/2024',
        dateOfCancelAppointment: '12/05/2024',
        imageSrc: 'company-logo.png',
        appointmentOfficerAr: "عبد الرحيم أسماعيل ناصف",
        appointmentOfficerEn: "Abdul Rahim Ismail Nasef",
        localMinutes: 9876,
        InternationalMinutes: 210,
        amount: 75000,
      },
      {
        clientNameAr: 'الشركة الالمانية لابادة الحشرات والقوارض',
        clientNameEn: 'German company for pest and rodent extermination',
        dateOfAppointment: '05/11/2024',
        dateOfCancelAppointment: null,
        imageSrc: 'company-logo.png',
        appointmentOfficerAr: "عبد الرحيم أسماعيل ناصف",
        appointmentOfficerEn: "Abdul Rahim Ismail Nasef",
        localMinutes: 3456,
        InternationalMinutes: 67,
        amount: 28000,
      },
      {
        clientNameAr: 'الشركة الالمانية لابادة الحشرات والقوارض',
        clientNameEn: 'German company for pest and rodent extermination',
        dateOfAppointment: '18/09/2024',
        dateOfCancelAppointment: '20/09/2024',
        imageSrc: 'company-logo.png',
        appointmentOfficerAr: "عبد الرحيم أسماعيل ناصف",
        appointmentOfficerEn: "Abdul Rahim Ismail Nasef",
        localMinutes: 6543,
        InternationalMinutes: 98,
        amount: 51000,
      },
      {
        clientNameAr: 'الشركة الالمانية لابادة الحشرات والقوارض',
        clientNameEn: 'German company for pest and rodent extermination',
        dateOfAppointment: '30/01/2024',
        dateOfCancelAppointment: null,
        imageSrc: 'company-logo.png',
        appointmentOfficerAr: "عبد الرحيم أسماعيل ناصف",
        appointmentOfficerEn: "Abdul Rahim Ismail Nasef",
        localMinutes: 2345,
        InternationalMinutes: 34,
        amount: 19000,
      },
      {
        clientNameAr: 'الشركة الالمانية لابادة الحشرات والقوارض',
        clientNameEn: 'German company for pest and rodent extermination',
        dateOfAppointment: '14/04/2024',
        dateOfCancelAppointment: '16/04/2024',
        imageSrc: 'company-logo.png',
        appointmentOfficerAr: "عبد الرحيم أسماعيل ناصف",
        appointmentOfficerEn: "Abdul Rahim Ismail Nasef",
        localMinutes: 8765,
        InternationalMinutes: 123,
        amount: 67000,
      },
      {
        clientNameAr: 'الشركة الالمانية لابادة الحشرات والقوارض',
        clientNameEn: 'German company for pest and rodent extermination',
        dateOfAppointment: '25/08/2024',
        dateOfCancelAppointment: null,
        imageSrc: 'company-logo.png',
        appointmentOfficerAr: "عبد الرحيم أسماعيل ناصف",
        appointmentOfficerEn: "Abdul Rahim Ismail Nasef",
        localMinutes: 4567,
        InternationalMinutes: 78,
        amount: 34000,
      },
      {
        clientNameAr: 'الشركة الالمانية لابادة الحشرات والقوارض',
        clientNameEn: 'German company for pest and rodent extermination',
        dateOfAppointment: '12/06/2024',
        dateOfCancelAppointment: '14/06/2024',
        imageSrc: 'company-logo.png',
        appointmentOfficerAr: "عبد الرحيم أسماعيل ناصف",
        appointmentOfficerEn: "Abdul Rahim Ismail Nasef",
        localMinutes: 7654,
        InternationalMinutes: 111,
        amount: 62000,
      },
      {
        clientNameAr: 'الشركة الالمانية لابادة الحشرات والقوارض',
        clientNameEn: 'German company for pest and rodent extermination',
        dateOfAppointment: '07/02/2024',
        dateOfCancelAppointment: null,
        imageSrc: 'company-logo.png',
        appointmentOfficerAr: "عبد الرحيم أسماعيل ناصف",
        appointmentOfficerEn: "Abdul Rahim Ismail Nasef",
        localMinutes: 1234,
        InternationalMinutes: 56,
        amount: 23000,
      },
      {
        clientNameAr: 'الشركة الالمانية لابادة الحشرات والقوارض',
        clientNameEn: 'German company for pest and rodent extermination',
        dateOfAppointment: '20/10/2024',
        dateOfCancelAppointment: '22/10/2024',
        imageSrc: 'company-logo.png',
        appointmentOfficerAr: "عبد الرحيم أسماعيل ناصف",
        appointmentOfficerEn: "Abdul Rahim Ismail Nasef",
        localMinutes: 9876,
        InternationalMinutes: 210,
        amount: 75000,
      },
      {
        clientNameAr: 'الشركة الالمانية لابادة الحشرات والقوارض',
        clientNameEn: 'German company for pest and rodent extermination',
        dateOfAppointment: '03/12/2024',
        dateOfCancelAppointment: null,
        imageSrc: 'company-logo.png',
        appointmentOfficerAr: "عبد الرحيم أسماعيل ناصف",
        appointmentOfficerEn: "Abdul Rahim Ismail Nasef",
        localMinutes: 3456,
        InternationalMinutes: 89,
        amount: 29000,
      },
      {
        clientNameAr: 'الشركة الالمانية لابادة الحشرات والقوارض',
        clientNameEn: 'German company for pest and rodent extermination',
        dateOfAppointment: '17/05/2024',
        dateOfCancelAppointment: '19/05/2024',
        imageSrc: 'company-logo.png',
        appointmentOfficerAr: "عبد الرحيم أسماعيل ناصف",
        appointmentOfficerEn: "Abdul Rahim Ismail Nasef",
        localMinutes: 6543,
        InternationalMinutes: 102,
        amount: 53000,
      },
      {
        clientNameAr: 'الشركة الالمانية لابادة الحشرات والقوارض',
        clientNameEn: 'German company for pest and rodent extermination',
        dateOfAppointment: '09/03/2024',
        dateOfCancelAppointment: null,
        imageSrc: 'company-logo.png',
        appointmentOfficerAr: "عبد الرحيم أسماعيل ناصف",
        appointmentOfficerEn: "Abdul Rahim Ismail Nasef",
        localMinutes: 2345,
        InternationalMinutes: 45,
        amount: 21000,
      },
      {
        clientNameAr: 'الشركة الالمانية لابادة الحشرات والقوارض',
        clientNameEn: 'German company for pest and rodent extermination',
        dateOfAppointment: '24/07/2024',
        dateOfCancelAppointment: '26/07/2024',
        imageSrc: 'company-logo.png',
        appointmentOfficerAr: "عبد الرحيم أسماعيل ناصف",
        appointmentOfficerEn: "Abdul Rahim Ismail Nasef",
        localMinutes: 8765,
        InternationalMinutes: 134,
        amount: 68000,
      },
      {
        clientNameAr: 'الشركة الالمانية لابادة الحشرات والقوارض',
        clientNameEn: 'German company for pest and rodent extermination',
        dateOfAppointment: '11/09/2024',
        dateOfCancelAppointment: null,
        imageSrc: 'company-logo.png',
        appointmentOfficerAr: "عبد الرحيم أسماعيل ناصف",
        appointmentOfficerEn: "Abdul Rahim Ismail Nasef",
        localMinutes: 4567,
        InternationalMinutes: 76,
        amount: 35000,
      },
      {
        clientNameAr: 'الشركة الالمانية لابادة الحشرات والقوارض',
        clientNameEn: 'German company for pest and rodent extermination',
        dateOfAppointment: '28/04/2024',
        dateOfCancelAppointment: '30/04/2024',
        imageSrc: 'company-logo.png',
        appointmentOfficerAr: "عبد الرحيم أسماعيل ناصف",
        appointmentOfficerEn: "Abdul Rahim Ismail Nasef",
        localMinutes: 7654,
        InternationalMinutes: 112,
        amount: 63000,
      },
      {
        clientNameAr: 'الشركة الالمانية لابادة الحشرات والقوارض',
        clientNameEn: 'German company for pest and rodent extermination',
        dateOfAppointment: '06/11/2024',
        dateOfCancelAppointment: null,
        imageSrc: 'company-logo.png',
        appointmentOfficerAr: "عبد الرحيم أسماعيل ناصف",
        appointmentOfficerEn: "Abdul Rahim Ismail Nasef",
        localMinutes: 1234,
        InternationalMinutes: 67,
        amount: 24000,
      },
      {
        clientNameAr: 'الشركة الالمانية لابادة الحشرات والقوارض',
        clientNameEn: 'German company for pest and rodent extermination',
        dateOfAppointment: '19/08/2024',
        dateOfCancelAppointment: '21/08/2024',
        imageSrc: 'company-logo.png',
        appointmentOfficerAr: "عبد الرحيم أسماعيل ناصف",
        appointmentOfficerEn: "Abdul Rahim Ismail Nasef",
        localMinutes: 9876,
        InternationalMinutes: 213,
        amount: 76000,
      },
    ],
    createdBy:{
      imageSrc: 'user.png',
      appointmentOfficerAr: "عبد الرحيم أسماعيل ناصف",
      appointmentOfficerEn: "Abdul Rahim Ismail Nasef",
      creationdate: "2025-02-02T14:30:00Z"
    }

  }
}




