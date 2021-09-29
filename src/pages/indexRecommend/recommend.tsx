import { Carousel } from "antd-mobile";
import *as React from "react";
import { Fragment, useState } from "react";
import "./recommend.scss"
import imgurl from "../../assets/img/wzry.png";
const Recommend: React.FunctionComponent = () => {
    const [selectedTab, setselectedTab] = useState(['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'])
    const [indexw, setindexw] = useState([1, 2, 3, 4, 5, 6, 7, 8])

    const entry = () => {
        return <Fragment>
            {indexw.map((item, index) => (<div className="home-item" key={index}>
                <img src={imgurl} alt="导航入口" />
                <div>王者荣耀</div>
            </div>))
            }
        </Fragment>
    }

    return <div className="home">

        {/* 搜索框 */}
        <div className="search-head">
            <div className="search">
                <div className="search_left">
                    <i className="iconfont">&#xe656;</i>
                    <input type="请输入" className="search_left_input" />
                </div>

            </div>
            <div className="search_right">
                <i className="iconfont">&#xe606;</i>
            </div>
        </div>
        {/*轮播图  */}
        <div className="home-carousel">
            <Carousel
                autoplay={true}
                infinite
                dots={false}
                beforeChange={() => { }}//切面板的回调函数
            >
                {selectedTab.map((val, index) => (
                    <div className="carousel-img" key={index}>
                        <img
                            src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                        />
                    </div>
                ))}
            </Carousel>
        </div>
        {/*菜单入口  */}
        <div className="home-entry">
            {entry()}
        </div>
        {/* 精彩 */}
        <div className="marvellous">
            <div className="marvellous-left">
                <i className="iconfont">&#xe648;</i>
                &ensp;魔抓  ×TES 超级联盟
            </div>
            <div className="marvellous-left">
                <span>9/08</span>
                <span> 19:00</span>
                <span> <i>3633</i> 人订阅</span>
                <span>订阅</span>
            </div>
        </div>
        {/* 猜你喜欢 */}
        <div className="like">             
            <div className="like-left">
                <img src={require('../../assets/img/lol.jpg')} alt="lol" />
                <div className="like-left-degree">
                    <span>子敬ad</span>
                    <span>  <i className="iconfont">&#xe648;</i> <span>41.0万</span></span>
                </div>
            </div>
            <div>顶级ad单排教学5分钟。。。</div>
            <div><span>峡谷牛人</span> <span>名人之星</span> </div>
        </div>
    </div>;
}
export default Recommend