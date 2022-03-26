import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';

// Helper Function

// Constants

export const TimerCountDown = (counter: number): any => {
  return (
    (counter - (counter %= 60)) / 60 + (counter > 9 ? ':' : ':0') + counter
  );
};

interface Props {
  seconds: number;
}
const CountDownTimer = ({seconds}: Props): JSX.Element => {
  const [counter, setCounter] = useState<number>(seconds);

  useEffect(() => {
    const timer: any =
      counter > 0 &&
      setInterval(() => {
        if (counter > 0) {
          setCounter(counter - 1);
        }
      }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [counter, seconds]);

  return (
    <>
      <Text style={[{color: 'blue', fontSize: 16}]}>
        {TimerCountDown(counter)}
      </Text>
    </>
  );
};

export default CountDownTimer;
