import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
import {Timer} from 'react-native-stopwatch-timer';

const screen = Dimensions.get('window');

export default function TimerScreen({navigation}) {
  const [isTimerStart, setIsTimerStart] = useState(false);
  const [timerDuration, setTimerDuration] = useState(60000);
  const [resetTimer, setResetTimer] = useState(false);

  return (
    <SafeAreaView style={styles.containerBody}>
      <View style={styles.containerBody}>
        <View style={styles.sectionStyle}>
          <Timer
            totalDuration={timerDuration}
            msecs
            // Time Duration
            start={isTimerStart}
            // To start
            reset={resetTimer}
            // To reset
            options={options}
            // Options for the styling
            handleFinish={() => {
              alert('Your Time Finish...!');
            }}
            // Can call a function On finish of the time
            getTime={time => {
              console.log(time);
            }}
          />

          {/* <TouchableHighlight
            onPress={() => {
              setIsTimerStart(!isTimerStart);
              setResetTimer(false);
            }}>
            <Text style={styles.buttonText}>
              {!isTimerStart ? 'START' : 'STOP'}
            </Text>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => {
              setIsTimerStart(false);
              setResetTimer(true);
            }}>
            <Text style={styles.buttonText}>RESET</Text>
          </TouchableHighlight> */}

          <View style={styles.blockSectionStyle}>
            {/* for start */}
            <TouchableOpacity
              onPress={() => {
                // setIsTimerStart(!isTimerStart);
                setIsTimerStart(true);
                setResetTimer(false);
              }}
              style={[styles.button, {marginLeft: 15, borderColor: '#41c762'}]}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: '#41c762',
                }}>
                Start
              </Text>
            </TouchableOpacity>

            {/* for stop */}
            <TouchableOpacity
              onPress={() => {
                setIsTimerStart(false);
                setResetTimer(false);
              }}
              style={[styles.button, {marginLeft: 15, borderColor: '#c7417b'}]}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: '#c7417b',
                }}>
                Stop
              </Text>
            </TouchableOpacity>

            {/* for reset */}
            <TouchableOpacity
              onPress={() => {
                setIsTimerStart(false);
                setResetTimer(true);
              }}
              style={[
                styles.button,
                {marginLeft: 15, marginRight: 15, borderColor: '#416bc7'},
              ]}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: '#416bc7',
                }}>
                Reset
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerBody: {
    flex: 1,
    backgroundColor: '#262626',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionStyle: {
    flex: 1,
    paddingTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blockSectionStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderWidth: 8,
    width: screen.width / 4,
    height: screen.width / 4,
    borderRadius: screen.width / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const options = {
  container: {
    borderWidth: 8,
    width: screen.width / 1.4,
    height: screen.width / 1.4,
    backgroundColor:'#e59400',
    borderColor:'#686a6e',
    borderRadius: screen.width / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 22,
    color: '#fff',
    // marginLeft: 7,
  },
};
