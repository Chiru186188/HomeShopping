import {StyleSheet, View, Text, Image} from 'react-native';
import {widthPercentageToDP as wp} from '../common/responsiveFunction';
import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
} from '../common/responsiveFunction';

/* *************** Colors ********** */

export const COLORS = {
  blueButton: '#283B91',
  primary: '#3E7DC4',
  Heading : "#212731",
  Content:"#353535",
   Subheading : '#888D91',
   Lableheading : '#828282',

  lightBlueSelection: '#CDE9FF',
  BlueSelectionBorder :'#88B3DF',
  lightGreySelection: '#f5f5f5',
  CancelRED: '#E01F20',
  SaveBlue:  '#3E7DC4',

  secondry: '#EBAD1E',
  navy: '#001e3e',
  cherry: '#dd003e',
  black: '#121826',
  blackWitOpacity: 'rgba(0, 0, 0, 0.1)',
  red: '#F75555',
  yellow: '#F0CA21',
  lightyellow: '#FFE097',
  lightgrey: '#ECECEC',
  white: '#FFFFFF',
  charcoalGrey: '#676767',
  brownGrey: '#949494',
  brightBLUE: '#2972FF',
  golden: '#F39C0F',
  veryLightPink: '#D3D3D3',
  halfpwhite: '#EFEFEF',
  halfpwhite1: '#F5F5F5',
  transparent: 'transparent',
  naviWithOpacity: 'rgba(0,30,62,0.4)',
  trueGreen: '#1eaf08',
  cranBerry: '#ab0030',
  greenishBlack: '#2b2b2b',
  skyBlue: '#72bacf',
  Greyscale: '#ADADAD',
  placeHolderColor: '#94A3B8',
  tabBarLabel: '#64748B',
  skyBlueLight: '#E0EEFF',
  skyBlueDark: '#E5EBF3',
  lightBlue: '#01478F',
  socialBg: '#F8FAFC',
  tabFillColor: '#2972FF',
  Config: '#8696B4',
  seperator: '#e4e4e4',
  pink: '#fa66dd',
  card: '#FFFF',
  shadow: '#000000',
  checkboxBlue: '#7AA8FF',
  linecolor: '#E7E7E7',
  chatlightbluecolor: '#F1F5F9',
  chatGreencolor: '#22C55E',
  bordercolor: '#C2C2C2',
  shadowwColor: '#DDDDDD',
  lightblueColor: '#59A7CF',
  lightGreyclor: '#F9F9F9',

};

const appTheme = {COLORS};

export default appTheme;



export const DEFAULTARRAYS = {
  ApplyList: [
   { label: 'Radio advertisement', value: 'Radio advertisement' },
   { label: 'Email', value: 'Email' },
   { label: 'Family member', value: 'Family member' },
   { label: 'Newspaper', value: 'Newspaper' },
   { label: 'Advertisement', value: 'Advertisement' },
   { label: 'Instagram', value: 'Instagram' },
   { label: 'Friend', value: 'Friend' },
   { label: 'Postal employee', value: 'Postal employee' },
   { label: 'Flyers/posters', value: 'Flyers/posters' },
   { label: 'Government of Anguilla', value: 'Government of Anguilla' },
   { label: 'Promotional event', value: 'Promotional event' },
   { label: 'Other (state)', value: 'Other (state)' },
   

 ],
 SizeList: [
  { label: 'Medium', value: 'Medium' },
  { label: 'Large (12 inches x 6 inches)', value: 'Large (12 inches x 6 inches)' },
 


],
LocationList: [
   { label: 'General Post Office', value: 'General Post Office' },
  { label: 'Welches Polyclinic', value: 'Welches Polyclinic' },
  { label: 'Western Polyclinic', value: 'Western Polyclinic' },
  { label: 'West End Clinic', value: 'West End Clinic' },
  { label: 'Rainbow Isles (Best Buy Supermarket – East)', value: 'Rainbow Isles (Best Buy Supermarket – East)' },
  

],
LocationList2: [
  'General Post Office',
  'Welches Polyclinic',
 'Western Polyclinic', 
 'West End Clinic',
 'Rainbow Isles (Best Buy Supermarket – East)'
 ],
SubscribedServices: [
  { label: 'Ezone Packages (AXA____________)', value: 'Ezone Packages (AXA____________))' },
 { label: 'Home Shopping packages (HS____________)', value: 'Home Shopping packages (HS____________)' },
 

],

RequirmentServices: [
  { label: 'Customs Clearance and delivery on ALL packages received', value: 'Customs Clearance and delivery on ALL packages received' },
 { label: 'Customs Clearance and delivery on request', value: 'Customs Clearance and delivery on request' },
 { label: 'Customs Clearance ONLY on ALL packages receive with collection/pick up at the General Post Office ', value: 'Customs Clearance ONLY on ALL packages receive with collection/pick up at the General Post Office ' },
 { label: 'Customs Clearance ONLY on request with collection/pick up at the General Post Office', value: 'Customs Clearance ONLY on request with collection/pick up at the General Post Office' },
 
],

TitleList: [
  {
    "Disabled": false,
    "Group": null,
    "Selected": false,
    "Text": "Dr.",
    "Value": "Dr"
  },
  {
    "Disabled": false,
    "Group": null,
    "Selected": false,
    "Text": "Esq.",
    "Value": "Esq"
  },
  {
    "Disabled": false,
    "Group": null,
    "Selected": false,
    "Text": "Hon.",
    "Value": "Hon"
  },
  {
    "Disabled": false,
    "Group": null,
    "Selected": false,
    "Text": "Jr.",
    "Value": "Jr"
  },
  {
    "Disabled": false,
    "Group": null,
    "Selected": false,
    "Text": "Mr.",
    "Value": "Mr"
  },
  {
    "Disabled": false,
    "Group": null,
    "Selected": false,
    "Text": "Mrs.",
    "Value": "Mrs"
  },
  {
    "Disabled": false,
    "Group": null,
    "Selected": false,
    "Text": "Ms.",
    "Value": "Ms"
  },
  {
    "Disabled": false,
    "Group": null,
    "Selected": false,
    "Text": "Msg.",
    "Value": "Msg"
  },
  {
    "Disabled": false,
    "Group": null,
    "Selected": false,
    "Text": "Pro.",
    "Value": "Pro"
  },
  {
    "Disabled": false,
    "Group": null,
    "Selected": false,
    "Text": "Rev.",
    "Value": "Rev"
  },
  {
    "Disabled": false,
    "Group": null,
    "Selected": false,
    "Text": "Rt.",
    "Value": "Rt"
  },
  {
    "Disabled": false,
    "Group": null,
    "Selected": false,
    "Text": "Sr.",
    "Value": "Sr"
  },
  {
    "Disabled": false,
    "Group": null,
    "Selected": false,
    "Text": "St.",
    "Value": "St"
  }
],
Nationality: [
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Afghanistan",
  //   "Value": "Afghanistan"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Åland Islands",
  //   "Value": "Åland Islands"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Albania",
  //   "Value": "Albania"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Algeria",
  //   "Value": "Algeria"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "American Samoa",
  //   "Value": "American Samoa"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Andorra",
  //   "Value": "Andorra"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Angola",
  //   "Value": "Angola"
  // },
  {
    "Disabled": false,
    "Group": null,
    "Selected": false,
    "Text": "Anguilla",
    "Value": "Anguilla"
  }
  // ,
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Antarctica",
  //   "Value": "Antarctica"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Antigua and Barbuda",
  //   "Value": "Antigua and Barbuda"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Argentina",
  //   "Value": "Argentina"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Armenia",
  //   "Value": "Armenia"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Aruba",
  //   "Value": "Aruba"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Australia",
  //   "Value": "Australia"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Austria",
  //   "Value": "Austria"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Azerbaijan",
  //   "Value": "Azerbaijan"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Bahamas",
  //   "Value": "Bahamas"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Bahrain",
  //   "Value": "Bahrain"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Bangladesh",
  //   "Value": "Bangladesh"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Barbados",
  //   "Value": "Barbados"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Belarus",
  //   "Value": "Belarus"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Belgium",
  //   "Value": "Belgium"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Belize",
  //   "Value": "Belize"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Benin",
  //   "Value": "Benin"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Bermuda",
  //   "Value": "Bermuda"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Bhutan",
  //   "Value": "Bhutan"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Bolivia, Plurinational State of bolivia",
  //   "Value": "Bolivia, Plurinational State of bolivia"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Bosnia and Herzegovina",
  //   "Value": "Bosnia and Herzegovina"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Botswana",
  //   "Value": "Botswana"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Bouvet Island",
  //   "Value": "Bouvet Island"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Brazil",
  //   "Value": "Brazil"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "British Indian Ocean Territory",
  //   "Value": "British Indian Ocean Territory"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Brunei Darussalam",
  //   "Value": "Brunei Darussalam"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Bulgaria",
  //   "Value": "Bulgaria"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Burkina Faso",
  //   "Value": "Burkina Faso"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Burundi",
  //   "Value": "Burundi"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Cambodia",
  //   "Value": "Cambodia"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Cameroon",
  //   "Value": "Cameroon"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Canada",
  //   "Value": "Canada"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Cape Verde",
  //   "Value": "Cape Verde"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Cayman Islands",
  //   "Value": "Cayman Islands"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Central African Republic",
  //   "Value": "Central African Republic"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Chad",
  //   "Value": "Chad"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Chile",
  //   "Value": "Chile"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "China",
  //   "Value": "China"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Christmas Island",
  //   "Value": "Christmas Island"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Cocos (Keeling) Islands",
  //   "Value": "Cocos (Keeling) Islands"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Colombia",
  //   "Value": "Colombia"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Comoros",
  //   "Value": "Comoros"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Congo",
  //   "Value": "Congo"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Congo, The Democratic Republic of the Congo",
  //   "Value": "Congo, The Democratic Republic of the Congo"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Cook Islands",
  //   "Value": "Cook Islands"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Costa Rica",
  //   "Value": "Costa Rica"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Cote d Ivoire",
  //   "Value": "Cote d Ivoire"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Croatia",
  //   "Value": "Croatia"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Cuba",
  //   "Value": "Cuba"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Cyprus",
  //   "Value": "Cyprus"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Czech Republic",
  //   "Value": "Czech Republic"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Denmark",
  //   "Value": "Denmark"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Djibouti",
  //   "Value": "Djibouti"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Dominica",
  //   "Value": "Dominica"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Dominican Republic",
  //   "Value": "Dominican Republic"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Ecuador",
  //   "Value": "Ecuador"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Egypt",
  //   "Value": "Egypt"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "El Salvador",
  //   "Value": "El Salvador"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Equatorial Guinea",
  //   "Value": "Equatorial Guinea"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Eritrea",
  //   "Value": "Eritrea"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Estonia",
  //   "Value": "Estonia"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Ethiopia",
  //   "Value": "Ethiopia"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Falkland Islands (Malvinas)",
  //   "Value": "Falkland Islands (Malvinas)"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Faroe Islands",
  //   "Value": "Faroe Islands"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Fiji",
  //   "Value": "Fiji"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Finland",
  //   "Value": "Finland"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "France",
  //   "Value": "France"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "French Guiana",
  //   "Value": "French Guiana"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "French Polynesia",
  //   "Value": "French Polynesia"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "French Southern Territories",
  //   "Value": "French Southern Territories"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Gabon",
  //   "Value": "Gabon"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Gambia",
  //   "Value": "Gambia"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Georgia",
  //   "Value": "Georgia"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Germany",
  //   "Value": "Germany"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Ghana",
  //   "Value": "Ghana"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Gibraltar",
  //   "Value": "Gibraltar"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Greece",
  //   "Value": "Greece"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Greenland",
  //   "Value": "Greenland"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Grenada",
  //   "Value": "Grenada"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Guadeloupe",
  //   "Value": "Guadeloupe"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Guam",
  //   "Value": "Guam"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Guatemala",
  //   "Value": "Guatemala"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Guernsey",
  //   "Value": "Guernsey"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Guinea",
  //   "Value": "Guinea"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Guinea-Bissau",
  //   "Value": "Guinea-Bissau"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Guyana",
  //   "Value": "Guyana"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Haiti",
  //   "Value": "Haiti"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Heard Island and Mcdonald Islands",
  //   "Value": "Heard Island and Mcdonald Islands"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Holy See (Vatican City State)",
  //   "Value": "Holy See (Vatican City State)"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Honduras",
  //   "Value": "Honduras"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Hong Kong",
  //   "Value": "Hong Kong"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Hungary",
  //   "Value": "Hungary"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Iceland",
  //   "Value": "Iceland"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "India",
  //   "Value": "India"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Indonesia",
  //   "Value": "Indonesia"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Iran, Islamic Republic of Persian Gulf",
  //   "Value": "Iran, Islamic Republic of Persian Gulf"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Iraq",
  //   "Value": "Iraq"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Ireland",
  //   "Value": "Ireland"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Isle of Man",
  //   "Value": "Isle of Man"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Israel",
  //   "Value": "Israel"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Italy",
  //   "Value": "Italy"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Jamaica",
  //   "Value": "Jamaica"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Japan",
  //   "Value": "Japan"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Jersey",
  //   "Value": "Jersey"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Jordan",
  //   "Value": "Jordan"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Kazakhstan",
  //   "Value": "Kazakhstan"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Kenya",
  //   "Value": "Kenya"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Kiribati",
  //   "Value": "Kiribati"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Korea, Democratic People s Republic of Korea",
  //   "Value": "Korea, Democratic People s Republic of Korea"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Korea, Republic of South Korea",
  //   "Value": "Korea, Republic of South Korea"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Kosovo",
  //   "Value": "Kosovo"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Kuwait",
  //   "Value": "Kuwait"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Kyrgyzstan",
  //   "Value": "Kyrgyzstan"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Laos",
  //   "Value": "Laos"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Latvia",
  //   "Value": "Latvia"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Lebanon",
  //   "Value": "Lebanon"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Lesotho",
  //   "Value": "Lesotho"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Liberia",
  //   "Value": "Liberia"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Libyan Arab Jamahiriya",
  //   "Value": "Libyan Arab Jamahiriya"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Liechtenstein",
  //   "Value": "Liechtenstein"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Lithuania",
  //   "Value": "Lithuania"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Luxembourg",
  //   "Value": "Luxembourg"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Macao",
  //   "Value": "Macao"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Madagascar",
  //   "Value": "Madagascar"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Malawi",
  //   "Value": "Malawi"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Malaysia",
  //   "Value": "Malaysia"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Maldives",
  //   "Value": "Maldives"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Mali",
  //   "Value": "Mali"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Malta",
  //   "Value": "Malta"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Marshall Islands",
  //   "Value": "Marshall Islands"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Martinique",
  //   "Value": "Martinique"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Mauritania",
  //   "Value": "Mauritania"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Mauritius",
  //   "Value": "Mauritius"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Mayotte",
  //   "Value": "Mayotte"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Mexico",
  //   "Value": "Mexico"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Micronesia, Federated States of Micronesia",
  //   "Value": "Micronesia, Federated States of Micronesia"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Moldova",
  //   "Value": "Moldova"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Monaco",
  //   "Value": "Monaco"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Mongolia",
  //   "Value": "Mongolia"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Montenegro",
  //   "Value": "Montenegro"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Montserrat",
  //   "Value": "Montserrat"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Morocco",
  //   "Value": "Morocco"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Mozambique",
  //   "Value": "Mozambique"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Myanmar",
  //   "Value": "Myanmar"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Namibia",
  //   "Value": "Namibia"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Nauru",
  //   "Value": "Nauru"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Nepal",
  //   "Value": "Nepal"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Netherlands",
  //   "Value": "Netherlands"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Netherlands Antilles",
  //   "Value": "Netherlands Antilles"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "New Caledonia",
  //   "Value": "New Caledonia"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "New Zealand",
  //   "Value": "New Zealand"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Nicaragua",
  //   "Value": "Nicaragua"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Niger",
  //   "Value": "Niger"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Nigeria",
  //   "Value": "Nigeria"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Niue",
  //   "Value": "Niue"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Norfolk Island",
  //   "Value": "Norfolk Island"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "North Macedonia",
  //   "Value": "North Macedonia"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Northern Mariana Islands",
  //   "Value": "Northern Mariana Islands"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Norway",
  //   "Value": "Norway"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Oman",
  //   "Value": "Oman"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Pakistan",
  //   "Value": "Pakistan"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Palau",
  //   "Value": "Palau"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Palestinian Territory, Occupied",
  //   "Value": "Palestinian Territory, Occupied"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Panama",
  //   "Value": "Panama"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Papua New Guinea",
  //   "Value": "Papua New Guinea"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Paraguay",
  //   "Value": "Paraguay"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Peru",
  //   "Value": "Peru"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Philippines",
  //   "Value": "Philippines"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Pitcairn",
  //   "Value": "Pitcairn"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Poland",
  //   "Value": "Poland"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Portugal",
  //   "Value": "Portugal"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Puerto Rico",
  //   "Value": "Puerto Rico"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Qatar",
  //   "Value": "Qatar"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Reunion",
  //   "Value": "Reunion"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Romania",
  //   "Value": "Romania"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Russia",
  //   "Value": "Russia"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Rwanda",
  //   "Value": "Rwanda"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Saint Barthelemy",
  //   "Value": "Saint Barthelemy"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Saint Helena, Ascension and Tristan Da Cunha",
  //   "Value": "Saint Helena, Ascension and Tristan Da Cunha"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Saint Kitts and Nevis",
  //   "Value": "Saint Kitts and Nevis"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Saint Lucia",
  //   "Value": "Saint Lucia"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Saint Martin",
  //   "Value": "Saint Martin"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Saint Pierre and Miquelon",
  //   "Value": "Saint Pierre and Miquelon"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Saint Vincent and the Grenadines",
  //   "Value": "Saint Vincent and the Grenadines"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Samoa",
  //   "Value": "Samoa"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "San Marino",
  //   "Value": "San Marino"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Sao Tome and Principe",
  //   "Value": "Sao Tome and Principe"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Saudi Arabia",
  //   "Value": "Saudi Arabia"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Senegal",
  //   "Value": "Senegal"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Serbia",
  //   "Value": "Serbia"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Seychelles",
  //   "Value": "Seychelles"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Sierra Leone",
  //   "Value": "Sierra Leone"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Singapore",
  //   "Value": "Singapore"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Slovakia",
  //   "Value": "Slovakia"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Slovenia",
  //   "Value": "Slovenia"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Solomon Islands",
  //   "Value": "Solomon Islands"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Somalia",
  //   "Value": "Somalia"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "South Africa",
  //   "Value": "South Africa"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "South Georgia and the South Sandwich Islands",
  //   "Value": "South Georgia and the South Sandwich Islands"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "South Sudan",
  //   "Value": "South Sudan"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Spain",
  //   "Value": "Spain"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Sri Lanka",
  //   "Value": "Sri Lanka"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Sudan",
  //   "Value": "Sudan"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Suriname",
  //   "Value": "Suriname"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Svalbard and Jan Mayen",
  //   "Value": "Svalbard and Jan Mayen"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Swaziland",
  //   "Value": "Swaziland"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Sweden",
  //   "Value": "Sweden"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Switzerland",
  //   "Value": "Switzerland"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Syrian Arab Republic",
  //   "Value": "Syrian Arab Republic"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Taiwan",
  //   "Value": "Taiwan"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Tajikistan",
  //   "Value": "Tajikistan"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Tanzania, United Republic of Tanzania",
  //   "Value": "Tanzania, United Republic of Tanzania"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Thailand",
  //   "Value": "Thailand"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Timor-Leste",
  //   "Value": "Timor-Leste"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Togo",
  //   "Value": "Togo"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Tokelau",
  //   "Value": "Tokelau"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Tonga",
  //   "Value": "Tonga"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Trinidad and Tobago",
  //   "Value": "Trinidad and Tobago"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Tunisia",
  //   "Value": "Tunisia"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Türkiye",
  //   "Value": "Türkiye"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Turkmenistan",
  //   "Value": "Turkmenistan"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Turks and Caicos Islands",
  //   "Value": "Turks and Caicos Islands"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Tuvalu",
  //   "Value": "Tuvalu"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Uganda",
  //   "Value": "Uganda"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Ukraine",
  //   "Value": "Ukraine"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "United Arab Emirates",
  //   "Value": "United Arab Emirates"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "United Kingdom",
  //   "Value": "United Kingdom"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "United States",
  //   "Value": "United States"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Uruguay",
  //   "Value": "Uruguay"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Uzbekistan",
  //   "Value": "Uzbekistan"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Vanuatu",
  //   "Value": "Vanuatu"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Venezuela, Bolivarian Republic of Venezuela",
  //   "Value": "Venezuela, Bolivarian Republic of Venezuela"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Vietnam",
  //   "Value": "Vietnam"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Virgin Islands, British",
  //   "Value": "Virgin Islands, British"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Virgin Islands, U.S.",
  //   "Value": "Virgin Islands, U.S."
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Wallis and Futuna",
  //   "Value": "Wallis and Futuna"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Yemen",
  //   "Value": "Yemen"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Zambia",
  //   "Value": "Zambia"
  // },
  // {
  //   "Disabled": false,
  //   "Group": null,
  //   "Selected": false,
  //   "Text": "Zimbabwe",
  //   "Value": "Zimbabwe"
  // }
],
}


/* * Fonts * */
export const FONTFAMILY = {
  Light: 'Poppins-Light',
  Medium: 'Poppins-Medium',
  Regular: 'Poppins-Regular',
  Bold: 'Poppins-Bold',
  ExtraBold: 'Poppins-ExtraBold',
  SemiBold: 'Poppins-SemiBold',
};

export const SPACER = ({size}) => {
  return <View style={{width: size, height: size}} />;
};
/* * Images * */
export const IMAGES = {
  //src/assets/Images/ImageNotFound.png
  Anguilla: require('../assets/Images/anguilla.png'),
  AtmCard: require('../assets/Images/atm-card.png'),

  Battery: require('../assets/Images/battery.png'),
  BGimage: require('../assets/Images/bg.png'),
  Charticon: require('../assets/Images/chart.png'),//src/assets/Images/ProfileImage.png
  Checkicon: require('../assets/Images/check.png'),
  Cruiseicon: require('../assets/Images/cruise.png'),
  Checkicon1: require('../assets/Images/CheckR.png'),
  ZoneIcon: require('../assets/Images/zone.png'),
  AmountIcon: require('../assets/Images/amount.png'),
  EmsLogo: require('../assets/Images/Ems-Logo.png'),
  EmsLogo2: require('../assets/Images/Ems-Logo2.png'),
  Ezone: require('../assets/Images/ezone.png'),
  Ezone1: require('../assets/Images/ezone1.png'),
  Ezone2: require('../assets/Images/ezone2.png'),
  Fileicon: require('../assets/Images/file.png'),
  Homeicon: require('../assets/Images/home.png'),
  HomeShopingImage: require('../assets/Images/homeShopingImage.png'),
  HomeShopingImage1: require('../assets/Images/homeshopingimage1.png'),
  HomeSimage: require('../assets/Images/homesImages.png'),
  HomeShopingImage2: require('../assets/Images/homeshopping.png'),

  POCDSlogo: require('../assets/Images/pocds.png'),
  POCDSMap: require('../assets/Images/pcds.jpg'),
  PBDSlogo: require('../assets/Images/post-man.png'),

  ProfileImage:require('../assets/Images/ProfileImage.png'),
  // loading:require('../assets/Images/loading.gif'),
  // logoGliston:require('../assets/Images/logoGliston.png'),
  logoHS:require('../assets/Images/logo.png'),
  logoBg:require('../assets/Images/logo2.png'),
  energyicon: require('../assets/Images/energyicon.png'),
//saveIcon
saveIcon: require('../assets/Images/saveIcon.png'),
closeIcon: require('../assets/Images/closeIcon.png'),

  //src/assets/Images/SideMenuIcons/homeM.png
  homeM:require('../assets/Images/SideMenuIcons/homeM.png'),
  HSServiceIcon:require('../assets/Images/SideMenuIcons/HSServiceIcon.png'),
  ContactUsIcon:require('../assets/Images/SideMenuIcons/ContactUsIcon.png'),
  CPIcon:require('../assets/Images/SideMenuIcons/CPIcon.png'),
  HSDepositeIcon:require('../assets/Images/SideMenuIcons/HSDepositeIcon.png'),
  HSPSinvoiveicon:require('../assets/Images/SideMenuIcons/HSPSinvoiveicon.png'),
  UserProfileIcon:require('../assets/Images/SideMenuIcons/UserProfileIcon.png'),
  ProfileIcon:require('../assets/Images/SideMenuIcons/ProfileIcon.png'),
  POCDSServiceicon:require('../assets/Images/SideMenuIcons/POCDSServiceicon.png'),
  MiscServiceIcon:require('../assets/Images/SideMenuIcons/MiscServiceIcon.png'),
  LogutIcon:require('../assets/Images/SideMenuIcons/LogutIcon.png'),
  
  AccountDetailsicon:require('../assets/Images/SideMenuIcons/AccountDetailsicon.png'),
  EZPaymnticon:require('../assets/Images/SideMenuIcons/EZPaymnticon.png'),
  postofficeicon:require('../assets/Images/SideMenuIcons/postofficeicon.png'),
  HSPSicon:require('../assets/Images/SideMenuIcons/HSPSicon.png'),
  PrintrICON:require('../assets/Images/printer.png'),
  EDITICON:require('../assets/Images/printer.png'),
  HISTORYICON:require('../assets/Images/printer.png'),

  EditReport:require('../assets/Images/EditReport.png'),
  HistoryReport:require('../assets/Images/HistoryReport.png'),
  PrintReport:require('../assets/Images/PrintReport.png'),

  receptionist_icon7:require('../assets/Images/receptionist_icon7.png'),
  Wallet_icon6:require('../assets/Images/Wallet_icon6.png'),
  user_icon3:require('../assets/Images/user_icon3.png'),
  Cal_icon1:require('../assets/Images/Cal_icon1.png'),
  cod_icon2:require('../assets/Images/cod_icon2.png'),
  Doc_icon5:require('../assets/Images/Doc_icon5.png'),
  Parcel_icon4:require('../assets/Images/Parcel_icon4.png'),
  profit_icon8:require('../assets/Images/profit_icon8.png'),

  // RefferalCode:require('../assets/Images/Reffercode.png'),
  // FST:require('../assets/Images/IstImage.png'),
  // SND:require('../assets/Images/ScdImages.png'),
  // THIRD:require('../assets/Images/3rdImage.png'),
  // FORTH:require('../assets/Images/forthImage.png'),
  // CODE:require('../assets/Images/CODE.png'),
  // NOChat:require('../assets/Images/nochat.png'),
  // REFERCODE:require('../assets/Images/REFERCODE.png'),
  // NOADD:require('../assets/Images/Noad.png'),

};


export const FORMATTIMEAMPM = (timestamp) => {
  const parsedDate = new Date(timestamp);
  const hours = parsedDate.getHours();
  const minutes = parsedDate.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes.toString().padStart(2, "0");
  return `${formattedHours}:${formattedMinutes} ${ampm}`;

}

export const NAMETOIMAGE = ({ name, profilePicture }) => {
  if (profilePicture) {
    return (
      <Image
        source={{ uri: profilePicture }}
        style={{ width: 50, height: 50, borderRadius: 25 }}
      />
    );
  }
  const initials = name
    .split(' ')
    .map(part => part.charAt(0))
    .join('');

  return (
    <View
      style={{
        width: 50,
        height: 50,
        backgroundColor: COLORS.Greyscale,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontFamily: FONTFAMILY.Medium,
          color: 'black',
          fontSize: rf(2.5),
        }}>
        {initials}
      </Text>
    </View>
  );
};

/* * Screens * */
export const SCREENS = {
  // 
  SplashScreen:'SplashScreen',
  // SplashScreencopy:'SplashScreencopy',

  // DrawerNavigation: 'DrawerNavigation',
  // TabNavigation: 'TabNavigation',

  /* * Auth Screen  * */

 WelcomScreen: 'WelcomScreen',
 LoginScreen: 'LoginScreen',
 ForgotPwd:'ForgotPwd',
 RegistrationPage:'RegistrationPage',

 SelectServices : 'SelectServices',
 SelectServicesSubscription:'SelectServicesSubscription',
 LinkOpenScreenNEW: 'LinkOpenScreenNEW',

 LinkOpenScreen: 'LinkOpenScreen',
 ReportLinkOpenScreen: 'ReportLinkOpenScreen',
 PDFViewer:'PDFViewer',
 ReportLinkOpenScreenNew: 'ReportLinkOpenScreenNew',
 CartListpayment: 'CartListpayment',


 HomeShopIntroduction : 'HomeShopIntroduction',
 EzoneIntroduction :'EzoneIntroduction',
 POCDSIntroduction:'POCDSIntroduction',
 RentalBoxIntroduction:'RentalBoxIntroduction',
 PBDSIntroduction:'PBDSIntroduction',
 HomeShopIntroductionSecond:'HomeShopIntroductionSecond',
 EzonIntroductionSecond:'EzonIntroductionSecond',
 RentalBoxIntroductionSecond:'RentalBoxIntroductionSecond',
 POCDSIntroductionSecond:'POCDSIntroductionSecond',
 EMSIntroduction:'EMSIntroduction',
 HomeShopAccountDetails1:'HomeShopAccountDetails1',
 HomeShopAccountDetails2:'HomeShopAccountDetails2',
 HomeShopAccountDetailsFinal:'HomeShopAccountDetailsFinal',
 RentalBoxAccountDetails1:'RentalBoxAccountDetails1',
 PBDSAccountDetails1:'PBDSAccountDetails1',
 POCDSAccountDetails1:'POCDSAccountDetails1',
 POCDSAccountDetailsFinal:'POCDSAccountDetailsFinal',
 EMSIntroductionSecond:'EMSIntroductionSecond',
 HSAccountDetail:'HSAccountDetail',
 PBDSIntroductionSecond:'PBDSIntroductionSecond',
 EZAccountDetail:'EZAccountDetail',
 PBDSAccountDetail:'PBDSAccountDetail',
 AccountTransactionHistoryDetails:"AccountTransactionHistoryDetails",
 RentalBoxAccountDetail:'RentalBoxAccountDetail',
 POCDSAccountDetail:'POCDSAccountDetail',
 AccountSummary:'AccountSummary',
 CartListpaymentparcel:'CartListpaymentparcel',

  /* * After Login Screen  * */


 DashBoard:'DashBoard',
 SideMenu:'SideMenu',

   /* * Payments Screen  * */

   ParcelSubscriptionpayment:'ParcelSubscriptionpayment',
 Depositepayment:'Depositepayment',
 PostOfficeBox:'PostOfficeBox',
 MiscPayments:'MiscPayments',
 HSpayment:'HSpayment',

 EZonepayment:'EZonepayment',
 POCDSPayments:'POCDSPayments',
 PBDSPayments:'PBDSPayments',

 PaymentGatwayScreen:'PaymentGatwayScreen',
 CartValueScreen:'CartValueScreen',
 PaymentGatwayScreenNew:'PaymentGatwayScreenNew',
 HSInvoiceUplaodpackages:'HSInvoiceUplaodpackages',
 ContactUs:'ContactUs',



 Userprofile:'Userprofile',
 ChangePassword:'ChangePassword',
 ThankYouScreen:'ThankYouScreen',
 
 VerificationScreen:'VerificationScreen',
 CreatePassword:'CreatePassword',

 SelectedServices:'SelectedServices',

};

export const API_URL = {
  /** Auth  */
//POST /api/AccountApi/HSRegisterApiAsync1
  LOGIN: 'UserApi/LoginApiAsync14',
  SIGNUPAPI: 'UserApi/RegisterApiAsync14',
  SIGNUPHS: 'AccountApi/HSRegisterApiAsync14',
  SIGNUPEZ: 'AccountApi/EzoneRegisterApiAsync14',
  SIGNUPPOBOX: 'AccountApi/PostOfficeBoxRegisterApiAsync14',
  SIGNUPPBDS: 'AccountApi/PBDSRegisterApiAsync14',
  
  SubscriptionServices: 'SubsacriptionsApi/GetIndex12?UserId=',
  GetRedirectPaymentResponse: 'PayOnlineApi/GetRedirectPaymentResponse11?',
  GetCustomerAllTransaction: 'AccountDetailsApi/GetCustomerAllTransaction3',
  GetCustomerEZAllTransaction: 'AccountDetailsApi/EzoneAccountDetailsGrid',
  GetCustomerRBAllTransaction: 'AccountDetailsApi/GetRentalDetailGrid',
  GetCustomerPOCDSAllTransaction: 'AccountDetailsApi/POCDsAccountDetailGrid',
  GetCustomerPBDSAllTransaction: 'AccountDetailsApi/PBDSAccountDetailsGrid',
  GetSummaryAllTransaction: 'AccountDetailsApi/AccountSummaryDetailGrid',

  SubscriptionGetPayment: 'SubsacriptionsApi/GetPayment12?UserId=',
  SubscriptionSavePlanPayment: 'SubsacriptionsApi/SavePlanApiAsync12',
  GetCustomerDetailsAPI : 'AccountDetailsApi/GetCustomerDetails3?userId=',
  GetEZCustomerDetailsAPI : 'AccountDetailsApi/EzoneAccountDetails?UserId=',
  PrintTransactionReportAPI : 'AccountDetailsApi/ViewTransationReportGrid',
  PrintPOCDSReportAPI : 'AccountDetailsApi/PocdsRpt?Id=',

  PrintReportAPI : 'AccountDetailsApi/GEtAllPrintTransationHistroryReport',
  GetRBCustomerDetailsAPI : 'AccountDetailsApi/GetRentalDetail?userId=',
  GetPOCDSCustomerDetailsAPI : 'AccountDetailsApi/POCDsAccountDetail?userID=',
  GetPBDSCustomerDetailsAPI : 'AccountDetailsApi/PBDSAccountDetails?UserId=',
  GetUSERDetailsAPI : 'UserApi/GetUserProfile13?Id=',
  GetAccountSummaryDetail : 'AccountDetailsApi/AccountSummaryDetail?UserID=',
  GetHSAccountDetailsForEdit : 'AccountApi/GetHSAccountDetailsForEdit',
  GetEZAccountDetailsForEdit : 'AccountApi/EzoneForEdit',
  GetPBDSAccountDetailsForEdit : 'AccountApi/PBDSAccountDetailsForEdit',
  GetRentalBoxAccountDetailsForEdit : 'AccountApi/RentalBoxForEdit',
  POSTUploadSupportDocApiAsync7 : 'DashboardApi/UploadSupportDocApiAsync7',


  ContactUSSubmitAPI: 'UserApi/ContactUsApiAsync13',


  GetHsPaymentsAPI : 'PayOnlineApi/HsPaymentsGet?userID=',
  SubmitHSPaymentApi : 'PayOnlineApi/HsPaymentsSubmit',
  GetmiscPaymentsAPI : 'PayOnlineApi/GetMiscServicesPayments10?userID=',
  SubmitmiscPaymentApi : 'PayOnlineApi/MiscServicesPaymentsApiAsync10',
  GetpocdsPaymentsAPI : 'PayOnlineApi/GetPOCDSService10?userID=',
  SubmitpocdsPaymentApi : 'PayOnlineApi/POCDSServiceApiAsync10',
  GetpbdsPaymentsAPI : 'PayOnlineApi/PbdsPaymentGet?userID=',
  SubmitpbddsPaymentApi : 'PayOnlineApi/PbdsPaymentSubmit',
  GetrentalPaymentsAPI : 'PayOnlineApi/RentalPaymentsGet?userID=',
  AddToCartApi : 'PayOnlineApi/RentalPaymentsSubmitCart',
  RentalPaymentsSubmitFinal:"PayOnlineApi/RentalPaymentsSubmitFinal",
  GetHsParcelAndSubscriptionAPI : 'PayOnlineApi/GetHsParcelAndSubscription?userID=',
  SubmitHsParcelAndSubscription:"PayOnlineApi/SubmitHsParcelAndSubscription?",

//getAccountApi/LoginApiDetailUserID
  DASHBoardAPI: 'DashboardApi/GetIndex6?Userid=',
  AddressListAPI: 'AccountApi/POCDSGetFormData?UserId=',
  PBDSFormLoadAPI: 'AccountApi/PBDSFormLoad?UserId=',
  RentalBoxFormLoadAPI: 'AccountApi/GetRentalForm?UserId=',
  SIGNUPPOCDS: 'AccountApi/POCDSRegisterApiAsync14',
  Userupdate: 'user/update',
  UserPicupdate: 'user/uploadimage',
  Usershowmobile: 'user/showmobile?',
  LOGOUT: 'auth/logout',
  APPLE_Login: 'auth/apple/login',
  DELETEUSER: 'user/account/delete',
  USERDETAIL : 'user/',
  FORGOTPWD: 'AccountApi/ForgetPasswordApiAsync14',
  VERIFYOTP: 'user/verify',
  RESETPASSWORD: '/AccountApi/CreateCustomerPasswordApiAsync14',
  Viewrelatedadds: 'product/post/related?productId=',
  CHANGEPASSWORD: 'AccountApi/ChangeUserPasswordApiAsync14',
  GetAllOnlineTransaction3: 'AccountDetailsApi/GetAllOnlineTransaction3?userID=',
  LOGGEDINUSERDETAIL : 'UserApi/LoginApiDetailUserID?UserID=',

  /** Category */
  CATEGORY_ALL: 'category/subcategory',
  CATEGORY_PRODUCT: 'product/post/all/category/test',

  //CATEGORY_PRODUCT: 'product/post/all/category?',
  DYNAMIC_CATEGORYDATA: 'master/post/category/',
  PRODUCT_viewall: 'product/viewall?',
  CATEGORY_getrecommendations: 'product/getrecommendations/',

  
  PRODUCT_POSTADD: 'product/postad',
  PRODUCT_MYPOST: 'product/post/all/user/',
  PRODUCT_MYFAVPOST: 'product/wishlist',
  PRODUCT_Like: 'product/like?',
  PRODUCT_STATUS: 'product/setstatus?',
  SITENAV: 'site-nav/getall',
  COUNTRY_mycountrylist: 'UserApi/CountryList',
  CHATLISTMEMBERS: 'users/summaries-with-messages',
  CHATLISTMEMBERSBUY: 'users/buy/summaries-with-messages',
  CHATLISTMEMBERSSELL: 'users/sell/summaries-with-messages',
  //CHATLISTMEMBERS: 'users/summaries',
  CHATMESSAGES: 'messages/test/',
    ADMINCHATMESSAGES: 'messages/',
    ADMINDETAILS: 'support/chat',
  INVOICEDELETE: 'DashboardApi/RemoveInvoiceApiAsync7?',
  // SENDOTP: 'user/sendotp?mobileNumber=',
  SENDOTP: 'user/sendotp/token?mobileNumber=',
  VERIFYMOBILEOTP: 'user/verify/mobile/otp/token?',
  SENDOTP1: 'product/sendotp/token?mobileNumber=',
  VERIFYMOBILEOTP1: 'product/verify/mobile/otp/token?',
//token
  STATEMENT: 'user/statement',
  PRICE_SUMMARY: 'product/price/summary?',
  STATELIST: 'api/location/state/',
  COUPONCHECK: 'coupon/check?',
  SAVEORDER: 'api/save/order/new',
  SAVEsubscription: 'subscription/topup',
  PRODUCTREPORT: 'product/report',
  USERREPORT: 'user/report',
  BLOCKUSER: 'chat/block',


};
export const STYLES = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: wp('3%'),
  },
  containerchat: {
    flex: 1,
    backgroundColor: COLORS.white,
    // paddingHorizontal: wp('3%'),
  },
  shadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  line: {
    height: 1,
    backgroundColor: COLORS.veryLightPink,
    width: '100%',
    marginVertical: hp('1%'),
  },
});

/* * SIZES * */
export const SIZES = {
  PaddingHorizontal: wp('3%'),
};
/* * Api Path * */
export const CONSTANTS = {
  UserData:'UserData',
  Fcmtoken: 'Fcmtoken',
  AccessToken: 'AccessToken',
  ShowMobile: 'ShowMobile',
  ShowNotification: 'ShowNotification',
  ShowRecommNotification: 'ShowRecommNotification',
  ShowOffersNotification: 'ShowOffersNotification',
  ISLOGGEDIN:'ISLOGGEDIN',

};
