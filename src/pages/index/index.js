import Taro, { Component } from '@tarojs/taro'
import { View, Text, ScrollView, Image } from '@tarojs/components'
import './index.scss'

// import MockData from '../../../mock/datalist.json';

import ListItem from '../../components/ListItem.js';

const MockData = [{
  "title": "图灵测试",
  "category": ["前端"],
  "image": "http://img.zcool.cn/community/010a1b554c01d1000001bf72a68b37.jpg@1280w_1l_2o_100sh.png"
}, {
  "title": "图灵测试",
  "category": ["前端", "小程序"],
  "image": "http://img.zcool.cn/community/010a1b554c01d1000001bf72a68b37.jpg@1280w_1l_2o_100sh.png"
}, {
  "title": "图灵测试",
  "category": ["前端"],
  "image": "http://img.zcool.cn/community/010a1b554c01d1000001bf72a68b37.jpg@1280w_1l_2o_100sh.png"
}, {
  "title": "图灵测试",
  "category": ["前端"],
  "image": "http://img.zcool.cn/community/010a1b554c01d1000001bf72a68b37.jpg@1280w_1l_2o_100sh.png"
}, {
  "title": "图灵测试",
  "category": ["前端"],
  "image": "http://img.zcool.cn/community/010a1b554c01d1000001bf72a68b37.jpg@1280w_1l_2o_100sh.png"
}, {
  "title": "图灵测试",
  "category": ["前端"],
  "image": "http://img.zcool.cn/community/010a1b554c01d1000001bf72a68b37.jpg@1280w_1l_2o_100sh.png"
}, {
  "title": "图灵测试",
  "category": ["前端"],
  "image": "http://img.zcool.cn/community/010a1b554c01d1000001bf72a68b37.jpg@1280w_1l_2o_100sh.png"
}, {
  "title": "图灵测试",
  "category": ["前端"],
  "image": "http://img.zcool.cn/community/010a1b554c01d1000001bf72a68b37.jpg@1280w_1l_2o_100sh.png"
}, {
  "title": "图灵测试",
  "category": ["前端"],
  "image": "http://img.zcool.cn/community/010a1b554c01d1000001bf72a68b37.jpg@1280w_1l_2o_100sh.png"
}, {
  "title": "图灵测试",
  "category": ["前端"],
  "image": "http://img.zcool.cn/community/010a1b554c01d1000001bf72a68b37.jpg@1280w_1l_2o_100sh.png"
}, {
  "title": "图灵测试",
  "category": ["前端"],
  "image": "http://img.zcool.cn/community/010a1b554c01d1000001bf72a68b37.jpg@1280w_1l_2o_100sh.png"
}, {
  "title": "图灵测试",
  "category": ["前端"],
  "image": "http://img.zcool.cn/community/010a1b554c01d1000001bf72a68b37.jpg@1280w_1l_2o_100sh.png"
}, {
  "title": "图灵测试",
  "category": ["前端"],
  "image": "http://img.zcool.cn/community/010a1b554c01d1000001bf72a68b37.jpg@1280w_1l_2o_100sh.png"
}, {
  "title": "图灵测试",
  "category": ["前端"],
  "image": "http://img.zcool.cn/community/010a1b554c01d1000001bf72a68b37.jpg@1280w_1l_2o_100sh.png"
}, {
  "title": "图灵测试",
  "category": ["前端"],
  "image": "http://img.zcool.cn/community/010a1b554c01d1000001bf72a68b37.jpg@1280w_1l_2o_100sh.png"
}];

export default class Index extends Component {
  config = {
    navigationBarTitleText: '简短小知识'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmout () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <ScrollView className='list' scrollY>
          {MockData.map(item => {
            return <ListItem key={item.title} category={item.category} title={item.title} image={item.image} />;
          })}
        </ScrollView>
      </View>
    )
  }
}

