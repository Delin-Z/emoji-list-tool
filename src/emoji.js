/**
 * Created by tan on 2020/10/09.
 */
import './emoji.css'
import emojiList from './emoji.json'

export default {
  list: emojiList,
  emojiHtml: function(emoji){
    let pattFlag = /[\u1f600-\u1f64f]/g.test('U+1F601')
    let unicodeHtml = `<span class='emoji_unicode'>${emoji.key}</span>`
    let spriteHtml = `<span class="emoji_sprite emoji_${emoji.index}"></span>`
    return pattFlag ? unicodeHtml : spriteHtml
  }
}