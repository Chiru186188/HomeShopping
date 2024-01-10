import React from 'react';
import { View, StyleSheet, Share } from 'react-native';
import Pdf from 'react-native-pdf';
import HeaderWithBackButtonAndShareButton from '../../components/HeaderWithBackButtonAndShareButton';
import { COLORS } from '../../constants/them';
import GradientBackground from '../../components/GradientBackground';




const PDFViewer = ({ route }) => {

  const GoToNext = () => {
    sharePDFLink()
  }  





  const handlePress = () => {
  };
  const { item } = route.params;
  const sharePDFLink = async () => {
    try {
      const pdfLink = item; // Replace with your PDF URL
      const result = await Share.share({
        title: 'Share Report',
        message: 'Check out this Report: ' + pdfLink,
        url: pdfLink,
      });

      if (result.action === Share.sharedAction) {
        console.log('PDF link shared successfully');
      } else if (result.action === Share.dismissedAction) {
        console.log('Sharing PDF link dismissed');
      }
    } catch (error) {
      console.error('Error sharing PDF link:', error.message);
    }
  };
  // const source = {
  //   uri: 'http://www.pdf995.com/samples/pdf.pdf', // Replace with your PDF URL
  //   cache: false, // Set to false to bypass caching
  // };
  // const PdfResource = { uri: 'http://122.176.104.29:7648//Content/Pdf/PrintReport_1292_202401091131589389.pdf', cache: true };

  return (
    <GradientBackground>
    {/* <View style={styles.container}> */}
<HeaderWithBackButtonAndShareButton onPress={handlePress} title = "Report" onNextPress={GoToNext} />

     <Pdf 
   trustAllCerts={false}
   source={{uri:item, cache: true }}
   style={styles.pdf}
   onLoadComplete={(numberOfPages, filePath) => {
      console.log(`number of pages: ${numberOfPages}`);
   }}
/>
    {/* </View> */}
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  pdf: {
    flex: 1,
    width: '100%',
    backgroundColor:COLORS.white


  },
});

export default PDFViewer;
