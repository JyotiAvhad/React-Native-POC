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
import {Stopwatch} from 'react-native-stopwatch-timer';

const screen = Dimensions.get('window');

export default function StopwatchScreen({navigation}) {
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);

  return (

    <SafeAreaView style={styles.containerBody}>
      <View style={styles.containerBody}>
        <View style={styles.sectionStyle}>
          <Stopwatch
            laps
            msecs
            start={isStopwatchStart}
            // To start
            reset={resetStopwatch}
            // To reset
            options={options}
            // Options for the styling
            getTime={time => {
              console.log(time);
            }}
          />

          {/* for start and stop */}
          {/* <TouchableHighlight
            onPress={() => {
              setIsStopwatchStart(!isStopwatchStart);
              setResetStopwatch(false);
            }}>
            <Text style={styles.buttonText}>
              {!isStopwatchStart ? 'START' : 'STOP'}
            </Text>
          </TouchableHighlight> */}

          <View style={styles.blockSectionStyle}>
            {/* for start */}
            <TouchableOpacity
              onPress={() => {
                // setIsStopwatchStart(!isStopwatchStart);
                setIsStopwatchStart(true);
                setResetStopwatch(false);
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
                setIsStopwatchStart(false);
                setResetStopwatch(false);
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
                setIsStopwatchStart(false);
                setResetStopwatch(true);
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
    backgroundColor:'#262626',
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
    fontSize: 25,
    color: '#FFF',
    // marginLeft: 7,
  },
};
