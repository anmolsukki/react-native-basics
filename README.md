### React Native Basics

#### KeyboardAvoidingView

```jsx
import { View, KeyboardAvoidingView } from 'react-native';

<KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
  <View>...</View>
</KeyboardAvoidingView>;
```

#### Detect Update Orientation

```jsx
import React, { useState, useEffect } from 'react';
import { View, Dimensions } from 'react-native';

const [buttonWidth, setButtonWidth] = useState(Dimensions.get('window').width / 4);

useEffect(() => {
  const updateLayout = () => {
    setButtonWidth(Dimensions.get('window').width / 4)
  }

  Dimensions.addEventListener("change", updateLayout)
  return () => {
    Dimensions.removeEventListener("change", updateLayout)
  }
})

<View style={{width: buttonWidth}}>...</View>
```

#### Platform

```jsx
import { View, Platform } from 'react-native';

<View style={{ ...styles.baseHeader, ...Platform.select({ ios: styles.headerIOS, android: styles.headerAndroid }) }}>
  {Platform.OS === 'ios' ? 'IOS' : 'Android'}
</View>;
```
