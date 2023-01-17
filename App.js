import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';



const App = () => {
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [result, setResult] = useState('');
  const [guessCount, setGuessCount] = useState(0);
  const [correctGuessed, setCorrectGuessed] = useState(false);

  const styles = {
    button: {
      backgroundColor: 'blue'
    },
    text: {
      padding: 10,
      margin: 10,
      width: '80%',
      alignSelf: 'center'
    },
    input: {
      padding: 10,
      margin: 10,
      borderWidth: 1,
      borderColor: 'black',
      width: '20%',
      alignSelf: 'center'
    }
  }

  const handleGuess = () => {
    if (correctGuessed) return;
    setGuessCount(guessCount + 1);
    if (guess < randomNumber) {
      setResult(`Your guess ${guess} is too low.`);
    } else if (guess > randomNumber) {
      setResult(`Your guess ${guess} is too high.`);
    } else {
      setCorrectGuessed(true);
      Alert.alert(
        `You guessed the number in ${guessCount} guesses.`,
        '',
        [
          {
            text: 'New Game',
            onPress: () => {
              setCorrectGuessed(false);
              setRandomNumber(Math.floor(Math.random() * 100) + 1);
              setGuess('');
              setResult('');
              setGuessCount(0);
            }
          },
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel'
          },
        ],
        { cancelable: false }
      );
    }
  }


  return (
    <View style={{ marginTop: 100 }}>
      <Text style={styles.text}>Guess a number between 1 and 100:</Text>
      <TextInput style={styles.input}
        keyboardType='numeric'
        value={guess}
        onChangeText={text => setGuess(text)}
        disabled={correctGuessed}
      />
      <Button
        title="MAKE GUESS"
        onPress={handleGuess}
        style={styles.button}
        disabled={correctGuessed}
      />
      <Text style={styles.text}>{result}</Text>
    </View>
  );
}

export default App;

