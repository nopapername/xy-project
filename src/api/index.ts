import { message } from 'antd';
import axios from 'axios';

// 定义发送邮件接口函数
export const sendEmail = async (phone: string, description: string) => {
  try {
    const response = await axios.post('http://xxx', {
      phone,
      description,
    });
    message.success(response.data);
    return true;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    message.error('遇到网络问题！');
    return false;
  }
};
