import React , { Component } from 'react';
import { Spin, Form, Icon, Input, Button, Row, Col, message } from 'antd'

const FormItem = Form.Item
@Form.create({
  // onFieldsChange(props, items) {},
})
export default class pageList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expand: false
    }
  }

  componentDidMount() {
    // this.props.form.setFieldsValue({ username: 'username', password: '123456' })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    // Only show error after a field is touched.
    const usernameError = isFieldTouched('username') && getFieldError('username');

    return (
      <div className="page list">
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="请输入用户名"
              />,
            )}
          </Form.Item>
          <Form.Item >
            {getFieldDecorator('password', { 
              rules: [{ required: true, message: 'Please input your password'}]
            })(<Input  placeholder="请输入密码" type="password" />)}
          </Form.Item>
          <FormItem>
            <Button type="primary" htmlType="submit" className="cert-btn">登录</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}
