# vue-editable-component
> 基于 VUE 的选择表情组件

# Installation
> npm install --save vue-editable-component

# usage
### template
```
<div>
  <div class="emoji_box">
    <template v-for="(emoji,index) in emojiList">
      <span :key="index"
        class="emoji_pointer"
        v-html="emojiHtml(emoji)"
        @click="changeEmoji(emoji)"
      ></span>
    </template>
  </div>
  <hr/>
  <template v-if="activeEmoji">
    <div v-html="emojiHtml(activeEmoji)"></div>
  </template>
</div>
```

### script
```
import emoji from 'vue-editable-component'
export default {
  data() {
    return {
      emojiList: emoji.list,
      emojiHtml: emoji.formatHtml,
      activeEmoji: null
    };
  },
  methods: {
    changeEmoji: function(emoji){
      this.activeEmoji = emoji
      console.log(emoji)
    }
  }
};
```
### script
```
.emoji_box {
  padding: 5px;
}
```

# return
#### list: Array
#### emojiHtml: function