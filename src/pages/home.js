import React, {Component} from 'react';
import {Row, Col, Upload, Input, Form, Icon} from 'antd';
import {Link} from 'react-router-dom'

const FormItem = Form.Item;
export default class home extends Component {
    state = {
        thumbUrl: null,
        images: [],
        result: null,
        assessment: null,
        screen: null,
        frame: null,
        back: null,
        user: null,
        time: null,
        model: null,
        color: null,
        type: null,
        history: null,
        system: null,
        vision: null,
        size: null,
        imei: null,
        year: null,
        other: null
    }
    onSystemChange = (evt) => {
        this.setState({
            system: evt.target.value,
        });
    }
    onUserChange = (evt) => {
        this.setState({
            user: evt.target.value,
        });
    }
    onTimeChange = (evt) => {
        this.setState({
            time: evt.target.value,
        });
    }
    onModelChange = (evt) => {
        this.setState({
            model: evt.target.value,
        });
    }
    onColorChange = (evt) => {
        this.setState({
            color: evt.target.value,
        });
    }
    onTypeChange = (evt) => {
        this.setState({
            type: evt.target.value,
        });
    }
    onHistoryChange = (evt) => {
        this.setState({
            history: evt.target.value,
        });
    }
    onVisionChange = (evt) => {
        this.setState({
            vision: evt.target.value,
        });
    }
    onSizeChange = (evt) => {
        this.setState({
            size: evt.target.value,
        });
    }
    onImeiChange = (evt) => {
        this.setState({
            imei: evt.target.value,
        });
    }
    onYearChange = (evt) => {
        this.setState({
            year: evt.target.value,
        });
    }
    onOtherChange = (evt) => {
        this.setState({
            other: evt.target.value,
        });
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
    handleChange = ({fileList}) => {
        this.setState({images: fileList})
        if(fileList.length>0){
            var url = window.URL || window.webkitURL || window.mozURL;
            var src = url.createObjectURL(fileList[0].originFileObj);
            this.setState({thumbUrl: src});
        }
    }

    render() {
        const {visible, loading} = this.state;

        const uploadButton = (
            <div>
                <Icon type="plus"/>
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
            <div>
                <Form style={{width: '50rem', marginLeft: 'auto', marginRight: 'auto'}}>
                    <Row>
                        <Col span={12}>
                            <FormItem>
                                <Input value={this.state.user} onChange={this.onUserChange} placeholder="质检工程师"/>
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem>
                                <Input value={this.state.time} onChange={this.onTimeChange} placeholder="质检时间"/>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <FormItem>
                                <Input value={this.state.model} onChange={this.onModelChange} placeholder="产品型号"/>
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem>
                                <Input value={this.state.color} onChange={this.onColorChange} placeholder="颜色"/>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <FormItem>
                                <Input value={this.state.type} onChange={this.onTypeChange} placeholder="网络制式"/>
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem>
                                <Input value={this.state.history} onChange={this.onHistoryChange} placeholder="维修历史"/>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <FormItem>
                                <Input value={this.state.vision} onChange={this.onVisionChange} placeholder="版本"/>
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem>
                                <Input value={this.state.size} onChange={this.onSizeChange} placeholder="容量"/>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <FormItem>
                                <Input value={this.state.imei} onChange={this.onImeiChange} placeholder="IMEI"/>
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem>
                                <Input value={this.state.system} onChange={this.onSystemChange} placeholder="系统版本"/>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <FormItem>
                                <Input value={this.state.year} onChange={this.onYearChange} placeholder="电池寿命"/>
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem>
                                <Input value={this.state.result} onChange={this.onResultChange} placeholder="检测结果"/>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <FormItem>
                                <Input value={this.state.assessment} onChange={this.onAssessmentChange}
                                       placeholder="整机评估"/>
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem>
                                <Input value={this.state.screen} onChange={this.onScreenChange} placeholder="屏幕检测"/>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <FormItem>
                                <Input value={this.state.frame} onChange={this.onFrameChange} placeholder="边框检测"/>
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem>
                                <Input value={this.state.back} onChange={this.onBackChange} placeholder="背部检测"/>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <FormItem>
                                <Input value={this.state.angles} onChange={this.onAnglesChange} placeholder="四角检测"/>
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem>
                                <Input value={this.state.other} onChange={this.onOtherChange} placeholder="其他"/>
                            </FormItem>
                        </Col>
                    </Row>
                    <Upload
                        listType="picture-card"
                        fileList={this.state.images}
                        onChange={this.handleChange}
                    >
                        {this.state.images.length >= 1 ? null : uploadButton}
                    </Upload>
                    <FormItem>
                        <Link to={{
                            pathname: '/report',
                            hash: '#the-hash',
                            state: {
                                ...this.state,
                                images:[]
                            }
                        }
                        }>提交</Link>

                    </FormItem>
                </Form>

            </div>
        )
    }
}