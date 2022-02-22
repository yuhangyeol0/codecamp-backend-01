import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';

@Injectable()
export class importService {
  async iamportService({ impUid }) {
    const getToken = await axios({
      url: 'https://api.iamport.kr/users/getToken',
      method: 'post', // POST method
      headers: { 'Content-Type': 'application/json' }, // "Content-Type": "application/json"
      data: {
        imp_key: '3711259373293770', // REST API키
        imp_secret:
          'f8210901b4e0d19fe07589b8ed6d8562d997c8729b6d0ca73a6da4485db95943140f89a2834d0e60', // REST API Secret
      },
    });
    const { access_token } = getToken.data.response;

    const getPaymentData = await axios({
      url: 'https://api.iamport.kr/payments/imp_448280090638',
      method: 'get', // GET method
      headers: {
        // 'Content-Type': 'application/json', // "Content-Type": "application/json"
        Authorization: `Bearer ${access_token}`, // 발행된 액세스 토큰
      },
    });
    const paymentData = getPaymentData.data.response;
    const { amount, status } = paymentData;
  }
}
