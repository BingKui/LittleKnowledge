import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components'

export default class ListItem extends Component {
  render() {
    return <View className='list-item'>
        <Image src={this.props.image} />
        <Text className='item-title' key={this.props.title}>{this.props.title}</Text>
        <View className='item-category-list'>
          {this.props.category.map(i => {
            return <Text key={i} className='bgColor-5 item-category'>{i}</Text>
          })}
        </View>
    </View>;
  }
}
