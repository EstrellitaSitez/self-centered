import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import { isMobile } from 'react-device-detect';
import DisclaimerTag from './DisclaimerTag';

export default function ReadingForm() {

    const [isModalVisible, setIsModalVisible] = useState(false)

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
      };
      

      const validateMessages = {
        required: '${label} is required!',
        types: {
          email: '${label} is not a valid email!'
        }
      };

      
        const onFinish = (values) => {
          console.log(values);
        };
      
        const handleOk = () => {
            setIsModalVisible(false);
          };
    
        const offsetDecision = () => {
            if (isMobile){
                return 0
            } else {
                return 5
            }
        }
        

    return(
        <div style={{textAlign:'center'}}>
               <Modal  title="So you don't know what to ask, huh?" visible={isModalVisible} onOk={handleOk} onCancel={handleOk} closable={false} keyboard={true} centered={true}>
                    <div style={{textAlign:'center'}}>
                    <p>What is stopping me from reaching my goal?</p>
                    <p>What are my dreams trying to tell me?</p>
                    <p>Why do I repeat the same patterns in my relationships?</p>
                    <p>Why does my kid hate me?</p>
                    <p>What am I not seeing about my situation?</p>
                    <p>etc...</p>
                    <p style={{color: 'teal'}}>Remember that the goal is to bring you closer to self. I want to provide you with information that will empower you to take control of your life. What information do you think you need in order to do this?</p>
                    </div>

                    <p style={{color: 'red'}}>Don't have a specific question? Don't worry. Give me a topic: 'Romance', 'Family', 'Friendship', 'Sexuality', 'Career', etc</p>
                </Modal>
        <Form {...layout} style={{textAlign:'center', alignItems:'center'}} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} style={{padding:'1%'}}>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: offsetDecision()}}>
        <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email', required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name={['user', 'details']} label="Questions">
          <Input.TextArea />
        </Form.Item>
        {/* on click, pull up a modal with sample questions */}
        <a onClick={()=> setIsModalVisible(true)}><p style={{color:'grey'}}>What questions can I ask?</p></a>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <DisclaimerTag/>
      </div>
    )
}
