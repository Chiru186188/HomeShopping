import { useEffect } from 'react';
import { BackHandler } from 'react-native';

const useBackButtonBlock = () => {
  useEffect(() => {
    const backAction = () => {
      // Your custom logic to block the back button goes here
      // For example, you can prevent going back to the previous screen
      return true; // Return true to block the default back button behavior
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove(); // Cleanup the event listener on component unmount
  }, []);
};

export default useBackButtonBlock;
