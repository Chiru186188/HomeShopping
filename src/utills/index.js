import React from 'react';
import {RefreshControl, Alert} from 'react-native';
import {COLORS, FONTFAMILY, FORMATTIMEAMPM, IMAGES, SCREENS} from '../constants/them';
import {responsiveFontSize as rf} from '../common/responsiveFunction';
import  Toast  from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import notifee, { AndroidImportance } from '@notifee/react-native'; // Import notifee

class utils {
  confirmAlert(title, msg, callback) {
    Alert.alert(
      title,
      msg,
      [
        {text: 'NO', onPress: () => callback('error')},
        {text: 'YES', onPress: () => callback('success')},
      ],
      {cancelable: false},
    );
  }

 validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{6,}$/;
    return passwordRegex.test(password);
  };
  confirmMessageAlert(title, msg,) {
    Alert.alert(
      title,
      msg,
      [
        {text: 'Ok', onPress: () =>'success' },
      ],
      {cancelable: false},
    );
  }


   saveStringToAsyncStorage = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
      console.log('String value saved successfully.');
    } catch (error) {
      console.log('Error saving string value:', error);
    }
  };
  removeValueFromAsyncStorage = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      console.log('Value removed successfully.');
    } catch (error) {
      console.log('Error removing value:', error);
    }
  };

  // async onDisplayNotification(title, body) {
  //   // Request permissions (required for iOS)
  //   await notifee.requestPermission()
  
  //   // Create a channel (required for Android)
  //   const channelId = await notifee.createChannel({
  //       id: 'Caribbargainsid',
  //       name: 'Carib Bargains',
  //       largeIcon: IMAGES.logoCarib, // Provide the correct local path
  //       importance: AndroidImportance.HIGH, // Set the importance to HIGH for front display
  //   });
  
  //   // Display a notification
  //   await notifee.displayNotification({
  //       title: title,
  //       body: body,
  //       android: {
  //           channelId,
  //           pressAction: {
  //               id: 'badassId',
  //           },
  //       },
  
  //   });
  // }

  
  // Example usage:
  
  
  getValueFromAsyncStorage = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        console.log('Retrieved value:', value);
        return value;
      } else {
        console.log('Value not found.');
        return null;
      }
    } catch (error) {
      console.log('Error retrieving value:', error);
      return null;
    }
  };
  clearAsyncStorage = async () => {
    console.log('AsyncStorage has been.');
    try {
      await AsyncStorage.clear();
      console.log('AsyncStorage has been cleared successfully.');
    } catch (error) {
      console.log('Error while clearing AsyncStorage:', error);
    }
  };

  
  successAlert(txt1,txt2) {
    
        Toast.show({
          type: 'success',
          text1: txt1,
          text2: txt2, 
        });
 
      
  }

  warningAlert(txt1,txt2) {
    Toast.show({
        type: 'error',
        text1: txt1,
        text2: txt2,   
      });
  }

  errorAlert(txt1,txt2) {
    Toast.show({
        type: 'error',
        text1: txt1,
        text2: txt2,  
        position:'bottom' ,
 
      });
  }

  isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  }
  isNull(obj) {
    if (obj === null || obj === undefined || obj === '') {
      return true;
    } else {
      return false;
    }
  }
  validateEmail(str) {
    ///^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
    var pattern =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return pattern.test(str);
  }

  passValidation(value) {
    return value.length < 6 || value.length > 16;
  }

  isEmptyOrSpaces(str) {
    if(str !==undefined){

      return str === null || str.match(/^ *$/) !== null;
    }
  }

  _refreshControl(refhresList, isRef = false) {
    return (
      <RefreshControl
        refreshing={isRef}
        onRefresh={refhresList}
        title={'Pull to Refresh'}
        tintColor={'blue'}
        colors={['white']}
        progressBackgroundColor={'blue'}
      />
    );
  }

  serializeObj(obj) {
    var str = [];
    for (var p in obj)
      if (obj[p] != '') {
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
      }
    return str.join('&');
  }



  getDateBeforeT(dateTimeString) {
    // console.log("dateTimeString",dateTimeString)

    const components = dateTimeString?.split('T');
    // console.log("components",components)
    if (components?.length > 0) {
      return components[0];
    } else {
      return null; // Invalid date format
    }
  }

  
  getTimeAgoString(givenDateString) {
    const givenDate = new Date(givenDateString);
    const currentDate = new Date(); // Current date
  
    // Calculate the time difference in milliseconds
    const timeDiff = currentDate.getTime() - givenDate.getTime();
  
    // Convert milliseconds to the desired units (days, weeks, months, years)
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const weeksDiff = Math.floor(daysDiff / 7);
    const monthsDiff = Math.floor(daysDiff / 30);
    const yearsDiff = Math.floor(daysDiff / 365);
  
    // Determine the appropriate time ago string based on the difference
    let timeAgoString = "";
  
    if (yearsDiff > 0) {
      timeAgoString = yearsDiff === 1 ? "1 year ago" : `${yearsDiff} years ago`;
    } else if (monthsDiff > 0) {
      timeAgoString = monthsDiff === 1 ? "1 month ago" : `${monthsDiff} months ago`;
    } else if (weeksDiff > 0) {
      timeAgoString = weeksDiff === 1 ? "1 week ago" : `${weeksDiff} weeks ago`;
    } else if (daysDiff > 0) {
      timeAgoString = daysDiff === 1 ? "Yesterday" : `${daysDiff} days ago`;
    } else {
      timeAgoString = "Today";
    }
  
    return timeAgoString;
  }
   getTimeAgoString1(givenDateString) {
    const givenDate = new Date(givenDateString);
    const currentDate = new Date(); // Current date
  
    // Calculate the time difference in milliseconds
    const timeDiff = currentDate.getTime() - givenDate.getTime();
  
    // Convert milliseconds to the desired units (days, weeks, months, years)
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const weeksDiff = Math.floor(daysDiff / 7);
    const monthsDiff = Math.floor(daysDiff / 30);
    const yearsDiff = Math.floor(daysDiff / 365);
  
    // Determine the appropriate time ago string based on the difference
    let timeAgoString = "";
  
    if (yearsDiff > 0) {
      timeAgoString = yearsDiff === 1 ? "1 year ago" : `${yearsDiff} years ago`;
    } else if (monthsDiff > 0) {
      timeAgoString = monthsDiff === 1 ? "1 month ago" : `${monthsDiff} months ago`;
    } else if (weeksDiff > 0) {
      timeAgoString = weeksDiff === 1 ? "1 week ago" : `${weeksDiff} weeks ago`;
    } else if (daysDiff > 0) {
      timeAgoString = daysDiff === 1 ? "Yesterday" : `${daysDiff} days ago`;
    } else {
      // If the time difference is less than a day, show the time with AM/PM
      // const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60));
      // const minutesDiff = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      // const timeString = `${hoursDiff}:${minutesDiff < 10 ? '0' : ''}${minutesDiff} ${currentDate.getHours() >= 12 ? 'PM' : 'AM'}`;
     // timeAgoString = `Today at ${FORMATTIMEAMPM(givenDateString)}`;
      timeAgoString = `${FORMATTIMEAMPM(givenDateString)}`;

    }
  
    return timeAgoString;
  }

  

  getTimeAgoString2(givenDateString) {
    // const givenDate = new Date(givenDateString);
    // const currentDate = new Date(); // Current date
  
    // // Calculate the time difference in milliseconds
    // const timeDiff = currentDate.getTime() - givenDate.getTime();
  
    // // Convert milliseconds to the desired units (days, weeks, months, years)
    // const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    // const weeksDiff = Math.floor(daysDiff / 7);
    // const monthsDiff = Math.floor(daysDiff / 30);
    // const yearsDiff = Math.floor(daysDiff / 365);
  
    // // Determine the appropriate time ago string based on the difference
    // let timeAgoString = "";
  
    // if (yearsDiff > 0) {
    //   timeAgoString = yearsDiff === 1 ? "1 year ago" : `${yearsDiff} years ago`;
    // } else if (monthsDiff > 0) {
    //   timeAgoString = monthsDiff === 1 ? "1 month ago" : `${monthsDiff} months ago`;
    // } else if (weeksDiff > 0) {
    //   timeAgoString = weeksDiff === 1 ? "1 week ago" : `${weeksDiff} weeks ago`;
    // } else if (daysDiff > 0) {
    //   timeAgoString = daysDiff === 1 ? "1 day ago" : `${daysDiff} days ago`;
    // } else {
    //   // If the time difference is less than a day, show the time with AM/PM
    //   const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60));
    //   const minutesDiff = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    //   const timeString = `${hoursDiff}:${minutesDiff < 10 ? '0' : ''}${minutesDiff} ${currentDate.getHours() >= 12 ? 'PM' : 'AM'}`;
    //   timeAgoString = `Today at ${timeString}`;
    //   timeAgoString = `Today at ${timeString}`;

    // }
  


    // const givenDateString = givenDateString;
const givenDate = new Date(givenDateString);
const currentDate = new Date(); // Current date

const timeDiff = currentDate.getTime() - givenDate.getTime();

const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
const weeksDiff = Math.floor(daysDiff / 7);
const monthsDiff = Math.floor(daysDiff / 30);
const yearsDiff = Math.floor(daysDiff / 365);

let timeAgoString = "";

if (yearsDiff > 0) {
  timeAgoString = yearsDiff === 1 ? "1 year ago" : `${yearsDiff} years ago`;
} else if (monthsDiff > 0) {
  timeAgoString = monthsDiff === 1 ? "1 month ago" : `${monthsDiff} months ago`;
} else if (weeksDiff > 0) {
  timeAgoString = weeksDiff === 1 ? "1 week ago" : `${weeksDiff} weeks ago`;
} else if (daysDiff > 0) {
  timeAgoString = daysDiff === 1 ? "Yesterday" : `${daysDiff} days ago`;
} else {
  // const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60));
  // const minutesDiff = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  // const timeString = `${hoursDiff}:${minutesDiff < 10 ? '0' : ''}${minutesDiff} ${currentDate.getHours() >= 12 ? 'PM' : 'AM'}`;
  timeAgoString = `${FORMATTIMEAMPM(givenDateString)}`;
}

console.log(timeAgoString);

    return timeAgoString;
  }
  
  showResponseError(error) {
    var authErrorRegex = /4[0-9][1-9]/g;
    var serverErrorRegex = /5[0-9][0-9]/g;

    if (error.message === 'Network Error') {
      return 'Please check your network';
    } else {
      if (error.response) {
        let errorCode = JSON.stringify(error.response.status);

        if (errorCode === '400') {
          let response = error.response.data;
          var error = '';
          if (this.isEmpty(response.data)) {
            error = response.message;
          } else {
            var temp = response.data[Object.keys(response.data)[0]];
            error = JSON.stringify(temp).replace('[', '').replace(']', '');
          }
          return error;
        } else if (authErrorRegex.test(errorCode)) {
          return 'Authentication failed';
        } else if (serverErrorRegex.test(errorCode)) {
          return 'Something went wrong with the server';
        }
      } else {
        return error;
      }
    }
  }
}

export default new utils();
