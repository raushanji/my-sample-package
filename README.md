If you're looking to **build a website or a cross-platform mobile app** – we will be happy to help you! Send a note to raushanranjan157@gmail.com and we will be in touch with you shortly.

![Sample Package]()

[📲See example app](https://github.com/raushanji/my-sample-package)

# My Sample Package Documentation

## Import components
1. `yarn add my-sample-package` OR 
2. `npm i my-sample-package`
2. Use with ES6 syntax to import components

```js
import {
  Message,
  Welcome,
} from 'my-sample-package'

```

## Quick Example
```jsx
<View>
  <Text>
    Welcome Screen
  </Text>
  <Welcome
    width={SCREEN_WIDTH}
    height={SCREEN_HEIGHT}
    fontSize={24}
    color={'#000'}
    fontWeight={'bold'}
    textAllign={'center'}
  />
</View>
```

## Welcome Properties Detail
Define a `welcome` screen with following properties as such:


| Property        | Type           | Description  |
| ------------- |-------------| -----|
| width | Number | Defines the width of the view in which welcome screen text will be shown  |
| height | Number | Defines the height of the view in which welcome screen text will be shown  |
| fontSize | Number | Defines the fontSize of the text shown in welcome screen |
| color | string | Defines the color of the text shown in welcome screen  |
| fontWeight | string | Defines the fontWeight`('bold','normal',etc.)` of the text shown in welcome screen |
| textAllign | string | Defines the alignment of the text shown in welcome screen |

## Responsive Welcome Screen 
To render a responsive screen, use `Dimensions` react-native library to get the width of the screen of your device like such
```js
import { Dimensions } from 'react-native'
const screenWidth = Dimensions.get('window').width
```

## Message Screen
```jsx
  <Welcome
    width={SCREEN_WIDTH}
    height={SCREEN_HEIGHT}
    message={'Welcome To My Sample Package'}
    fontSize={24}
    color={'#000'}
    fontWeight={'bold'}
    textAllign={'center'}
  />
```

## Message Screen Properties Detail
Define a `message` screen with following properties as such:


| Property        | Type           | Description  |
| ------------- |-------------| -----|
| width | Number | Defines the width of the view in which welcome screen text will be shown  |
| height | Number | Defines the height of the view in which welcome screen text will be shown  |
| message | string | Defines the message which you want to show |
| fontSize | Number | Defines the fontSize of the text shown in welcome screen |
| color | string | Defines the color of the text shown in welcome screen  |
| fontWeight | string | Defines the fontWeight`('bold','normal',etc.)` of the text shown in welcome screen |
| textAllign | string | Defines the alignment of the text shown in welcome screen |


## Welcome Screen
```jsx
  <Welcome
    width={SCREEN_WIDTH}
    height={SCREEN_HEIGHT}
    fontSize={24}
    color={'#000'}
    fontWeight={'bold'}
    textAllign={'center'}
  />
```

## Welcome Properties Detail
Define a `welcome` screen with following properties as such:


| Property        | Type           | Description  |
| ------------- |-------------| -----|
| width | Number | Defines the width of the view in which welcome screen text will be shown  |
| height | Number | Defines the height of the view in which welcome screen text will be shown  |
| fontSize | Number | Defines the fontSize of the text shown in welcome screen |
| color | string | Defines the color of the text shown in welcome screen  |
| fontWeight | string | Defines the fontWeight`('bold','normal',etc.)` of the text shown in welcome screen |
| textAllign | string | Defines the alignment of the text shown in welcome screen |
