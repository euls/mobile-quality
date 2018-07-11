import React, {Component} from 'react';
import {
    Icon,
    Card,
    Row,
    Col,
    Avatar,
    Divider,
} from 'antd';
import 'ant-design-pro/dist/ant-design-pro.css';
import '../less/AdvancedProfile.less';
import DescriptionList from 'ant-design-pro/lib/DescriptionList';
import zhangUrl from '../images/IMG_3169.png';

const {Description} = DescriptionList;

class Report extends Component {
    componentDidMount() {
        console.log(this.props.location.state)
    }

    render() {
        return (<div className={'App'}>
                <Row>
                    <Col span={12} style={{textAlign: 'right'}}>
                        <Avatar shape="square" size={'large'} src={this.props.location.state.thumbUrl?this.props.location.state.thumbUrl:""}/>
                    </Col>
                    <Col span={12} style={{textAlign: 'left',fontSize:'0.6rem'}}>
                        <Row style={{marginTop: '0.5rem',paddingLeft:'1rem'}}>
                            <span>质检工程师:{this.props.location.state.user}</span>
                        </Row>
                        <Row style={{paddingLeft:'1rem'}}>
                            <span>质检时间:{this.props.location.state.time}</span>
                        </Row>
                    </Col>
                </Row>
                <Card style={{marginTop: '2rem', width: '50rem', marginLeft: 'auto', marginRight: 'auto'}}
                      bordered={true}>
                    <Row>
                        <Col span={22} style={{marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}>
                            <h4 style={{marginBottom: 5, fontSize: '2rem'}}>检测报告</h4>
                        </Col>
                        <Col span={2}>
                            <img alt="example" style={{width: '10rem', float: "right", zIndex: 999}} src={zhangUrl}/>
                        </Col>
                    </Row>
                    <DescriptionList style={{marginBottom: 24, textAlign: 'left'}} col={1}>
                        <Description term="产品型号"> {this.props.location.state.model}</Description>
                        <Description term="检测结果">{this.props.location.state.result}</Description>
                        <Description term="整机评估">
                            {this.props.location.state.assessment}
                        </Description>
                    </DescriptionList>
                    <Card type="inner" bordered={true} style={{marginBottom: 20}}>
                        <DescriptionList size="large" col={2}
                                         style={{width: '30rem', marginLeft: 'auto', marginRight: 'auto'}}
                                         title="基本信息">
                            <Description term="颜色"> {this.props.location.state.color}</Description>
                            <Description term="网络制式"> {this.props.location.state.type}</Description>
                            <Description term="维修历史"> {this.props.location.state.history}</Description>
                            <Description term="版本"> {this.props.location.state.vision}</Description>
                            <Description term="容量"> {this.props.location.state.size}</Description>
                            <Description term="IMEI"> {this.props.location.state.imei}</Description>
                            <Description term="系统版本"> {this.props.location.state.system}</Description>
                            <Description term="电池寿命"> {this.props.location.state.year}</Description>
                        </DescriptionList>
                    </Card>
                    <Card type="inner" bordered={true}>
                        <DescriptionList size="large" col={2}
                                         style={{width: '26rem', marginLeft: 'auto', marginRight: 'auto'}}
                                         title="外观检测">
                            <Description term="屏幕检测"> {this.props.location.state.screen}</Description>
                            <Description term="边框检测"> {this.props.location.state.frame}</Description>
                            <Description term="背部检测"> {this.props.location.state.back}</Description>
                            <Description term="四角检测"> {this.props.location.state.angles}</Description>
                        </DescriptionList>
                    </Card>
                    <Card type="inner" bordered={false}>
                        <DescriptionList size="large" style={{marginBottom: 32}} title="功能检测">
                            <Description term="USB连接"><Icon style={{color: '#00e673', marginLeft: 4}}
                                                            type="check-circle"/></Description>
                            <Description term="触控功能"><Icon style={{color: '#00e673', marginLeft: 4}}
                                                           type="check-circle"/></Description>
                            <Description term="摄像头功能"><Icon style={{color: '#00e673', marginLeft: 4}}
                                                            type="check-circle"/></Description>
                            <Description term="耳机功能"><Icon style={{color: '#00e673', marginLeft: 4}}
                                                           type="check-circle"/></Description>
                            <Description term="录音功能"><Icon style={{color: '#00e673', marginLeft: 4}}
                                                           type="check-circle"/></Description>
                            <Description term="充放电测试"><Icon style={{color: '#00e673', marginLeft: 4}}
                                                            type="check-circle"/></Description>
                            <Description term="WIFI功能"><Icon style={{color: '#00e673', marginLeft: 4}}
                                                             type="check-circle"/></Description>
                            <Description term="蓝牙功能"><Icon style={{color: '#00e673', marginLeft: 4}}
                                                           type="check-circle"/></Description>
                            <Description term="重力感应"><Icon style={{color: '#00e673', marginLeft: 4}}
                                                           type="check-circle"/></Description>
                            <Description term="GPS导航"><Icon style={{color: '#00e673', marginLeft: 4}}
                                                            type="check-circle"/></Description>
                            <Description term="指纹识别"><Icon style={{color: '#00e673', marginLeft: 4}}
                                                           type="check-circle"/></Description>
                            <Description term="屏幕显示"><Icon style={{color: '#00e673', marginLeft: 4}}
                                                           type="check-circle"/></Description>
                            <Description term="外放功能"><Icon style={{color: '#00e673', marginLeft: 4}}
                                                           type="check-circle"/></Description>
                            <Description term="按键功能"><Icon style={{color: '#00e673', marginLeft: 4}}
                                                           type="check-circle"/></Description>
                        </DescriptionList>
                    </Card>
                    <DescriptionList
                        style={{marginBottom: 24, width: '30rem', marginLeft: 'auto', marginRight: 'auto'}}>
                        <Description term="无此功能"><Icon style={{marginLeft: 4}}
                                                       type="minus-circle"/></Description>
                        <Description term="功能异常"><Icon style={{color: 'red', marginLeft: 4}}
                                                       type="close-circle"/></Description>
                        <Description term="功能正常"><Icon style={{color: '#00e673', marginLeft: 4}}
                                                       type="check-circle"/></Description>
                    </DescriptionList>
                    <DescriptionList style={{textAlign: 'left'}} col={1}>
                        <Description term="其他">{this.props.location.state.other}</Description>
                    </DescriptionList>
                </Card>
            </div>
        );
    }
}

export default Report;