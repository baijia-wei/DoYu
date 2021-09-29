
import { TabBar } from 'antd-mobile';
import *as React from 'react'
import { useState } from 'react';
import { Route } from 'react-router-dom';
import Entertainment from '../entertainment/entertainment';
import Recommend from '../indexRecommend/recommend';


const index: React.FunctionComponent = (props: any) => {
    const [selectedTab, setselectedTab] = useState("blueTab")
    return (
        <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>


            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"

            >
                <TabBar.Item
                    title="推荐"
                    key="Life"
                    icon={<div style={{
                        width: '22px',
                        height: '22px',
                        background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
                    }}
                    />
                    }
                    selectedIcon={<div style={{
                        width: '22px',
                        height: '22px',
                        background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
                    }}
                    />
                    }
                    selected={selectedTab === 'blueTab'}
                    badge={1}
                    onPress={() => {
                        setselectedTab('blueTab');
                        props.history.push("/home/index")
                    }}
                    data-seed="logId"
                >
                    <Route path="/home/index" component={Recommend}></Route>
                </TabBar.Item>
                <TabBar.Item
                    icon={
                        <div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
                        }}
                        />
                    }
                    selectedIcon={
                        <div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
                        }}
                        />
                    }
                    title="娱乐"
                    key="Koubei"
                    badge={'new'}
                    selected={selectedTab === 'entertainment'}
                    onPress={() => {
                        props.history.push("/home/entertainment")
                        setselectedTab('entertainment')
                    }}
                    data-seed="logId1"
                >   
                    <Route path="/home/entertainment" component={Entertainment}></Route>
                </TabBar.Item>
            </TabBar>
        </div>
    )
}
export default index;