import React, {Component} from 'react';
import {Card, Modal, Button, Input, Form} from 'antd';
import {Link } from 'react-router-dom'
const FormItem = Form.Item;
export default class home extends Component {
    state = {
        result: null,
        assessment: null,
        screen:null,
        frame:null,
        back:null,
        angles:null,
    }

    onResultChange = (evt) => {
        this.setState({
            result: evt.target.value,
        });
    }
    onAssessmentChange = (evt) => {
        this.setState({
            assessment: evt.target.value,
        });
    }
    onScreenChange = (evt) => {
        this.setState({
            screen: evt.target.value,
        });
    }
    onFrameChange = (evt) => {
        this.setState({
            frame: evt.target.value,
        });
    }
    onBackChange = (evt) => {
        this.setState({
            back: evt.target.value,
        });
    }
    onAnglesChange = (evt) => {
        this.setState({
            angles: evt.target.value,
        });
    }

    render() {
        const {visible, loading} = this.state;
        return (
            <div>
                <Form style={{width:'20rem',marginLeft: 'auto', marginRight: 'auto'}}>
                    <FormItem>
                        <Input value={this.state.result}  onChange={this.onResultChange} placeholder="检测结果"/>
                    </FormItem>
                    <FormItem>
                        <Input value={this.state.assessment}  onChange={this.onAssessmentChange} placeholder="整机评估"/>
                    </FormItem>
                    <FormItem>
                        <Input value={this.state.screen}  onChange={this.onScreenChange} placeholder="屏幕检测"/>
                    </FormItem>
                    <FormItem>
                        <Input value={this.state.frame}  onChange={this.onFrameChange} placeholder="边框检测"/>
                    </FormItem>
                    <FormItem>
                        <Input value={this.state.back}  onChange={this.onBackChange} placeholder="背部检测"/>
                    </FormItem>
                    <FormItem>
                        <Input value={this.state.angles}  onChange={this.onAnglesChange} placeholder="四角检测"/>
                    </FormItem>
                    <FormItem>
                        <Link to={{
                            pathname: '/report',
                            hash: '#the-hash',
                            state: this.state}
                        }>提交</Link>

                    </FormItem>
                </Form>

            </div>
        )
    }
}