import React, {Component} from 'react';
import {
    Icon,
    Card,
    Row,
    Col,
    Tooltip,
    Divider,
} from 'antd';
import 'ant-design-pro/dist/ant-design-pro.css';
import '../less/AdvancedProfile.less';
import DescriptionList from 'ant-design-pro/lib/DescriptionList';
import zhangUrl from '../images/IMG_zhang.png';

const {Description} = DescriptionList;

class Report extends Component {
    componentDidMount() {
        console.log(this.props.location.state)
    }
    render() {
        return (<div className={'App'}>
            <Card style={{marginBottom: 24, marginTop: '2rem', width: '42rem', marginLeft: 'auto', marginRight: 'auto'}}
                  bordered={true}>
                <Row>
                    <Col span={22} style={{marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}>
                        <h4 style={{marginBottom: 5, fontSize: '2rem'}}>检测报告</h4>
                        <Divider style={{margin: '5px 0', width: '10rem', marginLeft: 'auto', marginRight: 'auto'}}/>
                        <h4 style={{marginBottom: 40, fontSize: '0.8rem'}}>手机</h4>
                    </Col>
                    <Col span={2}>
                        <img alt="example" style={{width: '10rem', float: "right", zIndex: 999}} src={zhangUrl}/>
                    </Col>
                </Row>
                <DescriptionList style={{marginBottom: 24}} col={1}>
                    <Description term="检测结果">{this.props.location.state.result}</Description>
                    <Description term="整机评估">
                        {this.props.location.state.assessment}
                    </Description>
                </DescriptionList>

                <Card type="inner" bordered={true}>
                    <DescriptionList size="large" col={2}
                                     style={{marginBottom: 24, width: '26rem', marginLeft: 'auto', marginRight: 'auto'}}
                                     title="外观检测">
                        <Description term="屏幕检测"> {this.props.location.state.screen}</Description>
                        <Description term="边框检测"> {this.props.location.state.frame}</Description>
                        <Description term="背部检测"> {this.props.location.state.back}</Description>
                        <Description term="四角检测"> {this.props.location.state.angles}</Description>
                    </DescriptionList>
                </Card>
                <Card type="inner" bordered={false}>
                    <DescriptionList size="large" style={{marginBottom: 32}} title="功能检测">
                        <Description term="USB连接"><Icon style={{color: '#00e673', marginLeft: 4}} type="check-circle"/></Description>
                        <Description term="触控功能"><Icon style={{color: '#00e673', marginLeft: 4}}
                                                       type="check-circle"/></Description>
                        <Description term="摄像头功能"><Icon style={{color: '#00e673', marginLeft: 4}} type="check-circle"/></Description>
                        <Description term="耳机功能"><Icon style={{color: '#00e673', marginLeft: 4}}
                                                       type="check-circle"/></Description>
                        <Description term="录音功能"><Icon style={{color: '#00e673', marginLeft: 4}}
                                                       type="check-circle"/></Description>
                        <Description term="充放电测试"><Icon style={{color: '#00e673', marginLeft: 4}} type="check-circle"/></Description>
                        <Description term="WIFI功能"><Icon style={{color: '#00e673', marginLeft: 4}}
                                                         type="check-circle"/></Description>
                        <Description term="蓝牙功能"><Icon style={{color: '#00e673', marginLeft: 4}}
                                                       type="check-circle"/></Description>
                        <Description term="重力感应"><Icon style={{color: '#00e673', marginLeft: 4}}
                                                       type="check-circle"/></Description>
                        <Description term="GPS导航"><Icon style={{color: '#00e673', marginLeft: 4}} type="check-circle"/></Description>
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
                <DescriptionList style={{marginBottom: 24, width: '30rem', marginLeft: 'auto', marginRight: 'auto'}}>
                    <Description term="无此功能"><Icon style={{marginLeft: 4}}
                                                   type="minus-circle"/></Description>
                    <Description term="功能异常"><Icon style={{color: 'red', marginLeft: 4}}
                                                   type="close-circle"/></Description>
                    <Description term="功能正常"><Icon style={{color: '#00e673', marginLeft: 4}}
                                                   type="check-circle"/></Description>
                </DescriptionList>
            </Card>
            </div>
        );
    }
}

export default Report;