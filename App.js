import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import ImageWithText from './components/ImageWithText';
import {changeVowels} from './helper/changeVowels';

const App = () => {
  const [firstText, setFirstText] = useState('');
  const [secondText, setSecondText] = useState('');

  const handleChangeText = text => {
    setFirstText(text);
    setSecondText(changeVowels(text));
  };

  return (
    <View style={styles.body}>
      <View>
        <Text style={styles.title}>Criador de mimimi</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu mimimi"
          onChangeText={handleChangeText}
        />
      </View>
      <ImageWithText firstText={firstText} secondText={secondText} />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#999999',
    flex: 1,
    paddingTop: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: 'white',
  },
  inputContainer: {
    alignSelf: 'stretch',
  },
  input: {
    borderWidth: 1,
    borderColor: '#999999',
    backgroundColor: 'white',
    height: 40,
    margin: 20,
    padding: 10,
  },
});

export default App;
