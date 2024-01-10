import {StyleSheet, Text, View,Platform, Linking,NativeModules, Image, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import {COLORS, CONSTANTS, FONTFAMILY, IMAGES, SCREENS, SIZES, STYLES} from '../../constants/them';
import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
} from '../../common/responsiveFunction';

import { useEffect,useState } from 'react';
import CustomBlueButton from '../../components/CustomBlueButton';
import GradientBackground from '../../components/GradientBackground';
import HeaderWithBackButton from '../../components/HeaderWithBackButton';
import EditTextWithLable from '../../components/EditTextWithLable';
import Icons, { Icon } from '../../components/Icons';
import CustomHeader from '../../components/CustomHeader';
import { ScrollView } from 'react-native-gesture-handler';

import {
  Dimensio_Icon2Svg,
  Calender_Icon6Svg,
  Ship_Icon1Svg,
  Weight_Icon3Svg,
  Location_Icon4Svg,
  Processing_Icon5Svg,
  Wallet_Icon7Svg,
  History_Icon2,
  
} from '../../components/Svg';
import SelectedServiceshorizontaly from '../../components/SelectedServiceshorizontaly';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAllDashboardDataSlice, getDashboardDataSlice } from '../../redux/slice/categories';
import useRedux from '../../components/useRedux';
import { useSelector } from 'react-redux';
import TouchableNativeFeedback from '../../components/TouchableNativeFeedback';
import utills from '../../utills';


export default function HSInvoiceUplaodpackages({navigation}) {
  const [SelectedService, setSelectedService] = useState('');
  const [pwd, setupwd] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [SelectedList, setSelectedList] = useState([]);
  const [Selectedtitle, setSelectedtitle] = useState("Pending Packages - Needs To Upload Invoices");

  const {dispatch} = useRedux();
  const AllDashBoardList  = useSelector(state => state.category.AllDashBoardList);
  const containermanifest = AllDashBoardList?.containermanifest;
  const containerDetailData = AllDashBoardList?.containerDetailData; 
useEffect(() => {


// getSavedvalue()
    getAllDashboarddata()
  return () => {

  };
}, []);
const getSavedvalue = async () => {
 // console.log('Selected Service:', SelectedService);
  const SelectedService = await AsyncStorage.getItem('SelectedService');
  setSelectedService(SelectedService)
}
const getAllDashboarddata = () => {

  let data = {
    id: 72,

  };

  dispatch(getAllDashboardDataSlice(data))
    .unwrap()
    .then(res => {

console.log("res????",res)

    })
    .catch(e => {

      setSelectedList(res?.containerDetailData[0]?.containerDetailsListModel)
      //  setLoading(false);
    });
};

useFocusEffect(
  React.useCallback(() => {
    
    const unsubscribe = navigation.addListener('beforeRemove', (e) => {
      //console.log("beforeRemove",e)
      const originalString = e.target;
      const arrayOfSubstrings = originalString.split('-');
      
      if (e.data.action.type === 'GO_BACK' && arrayOfSubstrings[0]=== 'HSInvoiceUplaodpackages') {

        if (!handleBackGesture()) {
          e.preventDefault();
        }
    }
   
    });

    
    const handleBackGesture = () => {
     // console.log('ooooooo')
      return false;
    };
       
  }, [navigation])
);
const data = [

  { id: '1', text: 'Needs To Upload Invoices',Title: containermanifest?.missingInvoice,color:"#F07C8A",icon:IMAGES.Doc_icon5 },
  { id: '2', text: 'Intransit Packets',Title:containermanifest?.inTransit,color:"#8FC5EE",icon:IMAGES.profit_icon8 },
  { id: '3', text: 'Processing',Title: containermanifest?.processing,color:"#FEB08E",icon:IMAGES.Wallet_icon6 },
  { id: '4', text: 'Ready For Pickup' ,Title: containermanifest?.readyForPickup,color:"#FADA7A",icon:IMAGES.MiscServiceIcon},
  { id: '5', text: 'Delivered packet',Title: containermanifest?.delivered ,color:"#5AC573",icon:IMAGES.user_icon3},
  { id: '6', text: 'All Packages',Title: containermanifest?.total ,color:"#A7A9AB",icon:IMAGES.Parcel_icon4},

];
const handlePress = () => {
  
};
const UpdateList = (item) => {
  {
    if (item.id === '1') {
      setSelectedtitle("Pending Packages - Needs To Upload Invoices");
      setSelectedList(containerDetailData[0]?.containerDetailsListModel)
    }
   else if (item.id === '2') {
      setSelectedtitle("Pending Packages - Needs To Upload Invoices");
      setSelectedList(containerDetailData[1]?.containerDetailsListModel)
    }
    else if (item.id === '3') {
      setSelectedtitle("Processing Packages");
      setSelectedList(containerDetailData[2]?.containerDetailsListModel)
    }
    else if (item.id === '4'||item.id === '5'||item.id === '6') {
      setSelectedtitle("Packages Status - History");
      setSelectedList(containerDetailData[3]?.containerDetailsListModel)
    }
    console.log("containerDetailData", SelectedList);

  }
};




  return (
     <GradientBackground>
    <CustomHeader onPress={handlePress} title = "Package status & Invoice upload" />
    {/* <SelectedServiceshorizontaly
        selectedService={SelectedService}
        setSelectedService={setSelectedService}
      /> */}
    
    <ScrollView>
    <View style={styles.container}>
<View>
    <FlatList
      data={data}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      // renderItem={renderItem}

      renderItem={({ item }) => ( // Define renderItem directly
      <TouchableNativeFeedback 
      onPress={() => UpdateList(item)}

      // onPress={() => }
  
  style={[styles.item,{    borderLeftColor: item.color,
}]}>
    <View style={{flexDirection:'row',gap:10,alignItems:'center'}} >
      <View style={{width: 30,
    height: 30,backgroundColor:item.color,alignItems:'center',justifyContent:'center',borderRadius:5}}>
      <Image source={item.icon} style={{
    width: 18,
    height: 18,
  }} />
      </View>
      <View style={[STYLES.row,{flex :1}]}>
      <Text style={styles.itemText}>{item.text}</Text>
      <Text style={styles.titleText}>{item.Title}</Text>

      </View>
      {/* <View style={{ marginLeft: 10, flex: 1 }}>
     
    </View> */}
    </View>
  </TouchableNativeFeedback>
    )}
      contentContainerStyle={styles.list}
    />
</View>

<View style={{marginTop:35}}>
<Text style={[styles.titleText,{paddingHorizontal:10,textAlign:'left'}]}>{Selectedtitle}</Text>

<FlatList
      data={SelectedList}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={renderItem2}
      contentContainerStyle={styles.list}
    />

    </View>
    </View>
    </ScrollView>
     </GradientBackground>

  );
}

const lowerList = [

  { id: '1', text: 'Needs To Upload Invoices',Title: '40',color:COLORS.chatGreencolor,icon:IMAGES.Doc_icon5 },
  { id: '2', text: 'Upload Doc',Title: '56' ,color:'pink',icon:IMAGES.user_icon3},
  
];
const updateList =({item}) =>{
console.log("Hii",item)
}
const renderItem = ({ item }) => (

  <TouchableNativeFeedback 
  onPress={() =>
    console.log("Hii",item)
    //setSelectedtitle(item.text)
    
    }
  
  style={[styles.item,{    borderLeftColor: item.color,
}]}>
    <View style={{flexDirection:'row',gap:10,alignItems:'center'}} >
      <View style={{width: 30,
    height: 30,backgroundColor:item.color,alignItems:'center',justifyContent:'center',borderRadius:5}}>
      <Image source={item.icon} style={{
    width: 18,
    height: 18,
  }} />
      </View>
      <View style={[STYLES.row,{flex :1}]}>
      <Text style={styles.itemText}>{item.text}</Text>
      <Text style={styles.titleText}>{item.Title}</Text>

      </View>
      {/* <View style={{ marginLeft: 10, flex: 1 }}>
     
    </View> */}
    </View>
  </TouchableNativeFeedback>
);
const renderItem2 = ({ item }) => (
  
    <View >
      <View style={styles.item1}>
    

        <View style={styles.rowList2}>
        <View style={styles.rowAA}>
        <Ship_Icon1Svg style={{width:30,height:30}}/>
     <Text style={styles.Left500TextMedum}>{item.shipper}</Text>
  
        </View>  
        <View style={styles.rowAA}>
        <Dimensio_Icon2Svg style={{width:30,height:30}}/>
 
    <Text style={styles.Left500TextMedum}>{item.length + " * "+item.width + " * "+item.height + " MM" }</Text>
  
        </View>

        </View>


        <View style={styles.rowList2}>
        <View style={styles.rowAA}>
        <Weight_Icon3Svg style={{width:30,height:30}}/>
    
    
     <Text style={styles.Left500TextMedum}>{item.wt + ' KG'}</Text>
  
        </View>  
        <View style={styles.rowAA}>
        <Processing_Icon5Svg style={{width:30,height:30}}/>



    <View>
            
    <Text style={styles.Left500TextMedum}>{item.trackingNo}</Text>
    </View>
        </View>

        </View>

        <View style={styles.rowList2}>
        <View style={styles.rowAA}>
        <Location_Icon4Svg style={{width:30,height:30}}/>

        <Text style={styles.Left500TextMedum}>
  {item.deliveredStatus ? 'Delivered' : "Shipped"}
</Text>  
        </View>  
        <View style={styles.rowAA}>
        <Calender_Icon6Svg style={{width:30,height:30}}/>
       
    <Text style={styles.Left500TextMedum}>  {item.deliveredStatus ? utills.getDateBeforeT(item.deliveredDate) : utills.getDateBeforeT(item.shippedDate)}
</Text>
  
        </View>

        </View>



        <View style={styles.rowList2}>
        <View style={styles.rowAA}>
        <Wallet_Icon7Svg style={{width:30,height:30}}/>
     <Text style={styles.Left500TextMedum}>{item.value}</Text>
  
        </View>  
        <View style={styles.rowAA}>
        <History_Icon2 style={{width:30,height:30}}/>

    <Text style={styles.Left500TextMedum}>{item.via}</Text>
  
        </View>

        </View>
        <Text style={[styles.Left500BOLDText,{paddingHorizontal:10,marginBottom:10}]}>{item?.contents}</Text>
   
        {/* <View style={styles.rowList3}>
          <Text style={styles.Left500BOLDText} >Contents:</Text>
          <Text style={styles.Left500TextMedumR} >{item?.contents}</Text>
          </View> */}
          {/* <View style={styles.rowList3}>
          <Text style={styles.Left500BOLDText} >Action</Text>
          <Text style={styles.Left500TextMedumR} >{item?.contents}</Text>
          </View> */}
      </View>
     
      <View style={styles.hr2}></View>
      </View>   
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width : wp('96'),
    justifyContent:'flex-start',
    margin:20,
    borderRadius : 15,
    padding:10,
    alignSelf:'center'
  },

  

 
  item: {
    width: wp('90%'), // Adjust as needed
    height: 50, // Adjust as needed
    backgroundColor: '#ffffff',
    marginRight: 8, // Adjust as needed
   
    justifyContent: 'flex-start',
    borderRadius : 15,
   paddingVertical:10,
paddingHorizontal:10,
borderLeftWidth: 7, // Width of the left border
marginBottom:10
  },
  item1: {
    // Adjust as needed
    backgroundColor: '#ffffff',
    marginTop: 8, // Adjust as needed
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderRadius : 15,
    paddingVertical:15,
paddingHorizontal:10,
  },
  itemText: {
    fontSize: rf(1.8), // You can adjust the size as needed
    fontFamily: FONTFAMILY.Regular,
  },
  titleText: {
    fontSize: rf(1.8), // You can adjust the size as needed
    fontFamily: FONTFAMILY.SemiBold,
  },
  buttonContainer: {
   gap :10,
   alignItems: 'center',
  },
  txt: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: rf(3.0),
    color: COLORS.Heading,
    textAlign: 'left',
    marginTop: hp('1.8%'),
  },
  button: {
    marginTop: 20, 
  },
  icon: {
    fontSize: rf(2.5),
    color: COLORS.Subheading,
    marginRight: 10,
  },
  txt1: {
    fontFamily: FONTFAMILY.Regular,
    fontSize: rf(1.7),
    color: COLORS.Subheading,
    textAlign: 'left',
  },
  rememberme: {
    fontFamily: FONTFAMILY.Medium,
    fontSize: rf(1.7),
    color: COLORS.Lableheading,
    textAlign: 'left',
  },
  SignUpContainer: {
   
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subContainer2: {
    marginVertical: 10,
  
   flexDirection: 'row',
   justifyContent: 'flex-start',
   alignItems: 'center',
 },
 Left500Text: {
  fontFamily: FONTFAMILY.SemiBold,
  fontSize:rf(1.8),
  textAlign: 'center',
},
Left500BOLDText: {
  fontFamily: FONTFAMILY.Bold,
  fontSize:rf(1.8),
  textAlign: 'left',
}, 
Left500RegularText: {
  fontFamily: FONTFAMILY.Regular,
  fontSize:rf(1.8),
  textAlign: 'left',
  color:COLORS.Lableheading
},
row: {
  flexDirection: 'row',
},
rowAA: {
  flexDirection: 'row',
  gap:5,
  width:wp('45%'),
  alignItems:'center'
},
Left500TextMedum: {
  fontFamily: FONTFAMILY.Medium,
  fontSize:rf(1.6),
  textAlign: 'left',
},
Left500TextMedumR: {
  fontFamily: FONTFAMILY.Medium,
  fontSize:rf(1.6),
  textAlign: 'right',
},
rowList: {
  flex:1,
  flexDirection: 'row',
  justifyContent:'space-between',
  paddingHorizontal:10,
  marginVertical:15,
  gap:10

},
rowList2: {
  flex:1,
  
  flexDirection: 'row',
  justifyContent:'space-between',
  paddingHorizontal:10,
  marginVertical:10,
  alignContent:'center'

},
rowList3: {
  flex:1,
  minHeight: 'auto' ,
  //  flexWrap: 'wrap',
  flexDirection: 'row',
  justifyContent:'space-between',
  paddingHorizontal:10,
  marginVertical:10,
  alignItems:'center',
  gap:20

},

rowAc: {
  flexDirection: 'row',
justifyContent:'space-around',
marginVertical:30,
paddingHorizontal:20,
width:wp('90%')
},
});




