import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

// Create styles
Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});


const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: 'white',
    fontSize:'14px',
   

   
  },
  section: {
    margin: '7%',
    padding: 10,
    flexGrow: 1,
    fontFamily:'Oswald',
  }
});


const getMonth = (number) => {
  switch (number) {
    case 1:
      return "January"
    case 2:
      return "February"
    case 3:
      return "March"    
    case 4:
      return "April"   
    case 5:
      return "May"  
    case 6:
      return "June" 
    case 7:
      return "July"
    case 8:
      return "August"
    case 9:
      return "September"
    case 10:
      return "October"
    case 11:
      return "November"
    case 12:
      return "December"   
  }
}


var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = getMonth(today.getMonth() + 1);
var yyyy = today.getFullYear();

today = mm + ' ' + dd + ', ' + yyyy;


// Create Document Component
const MyDocument = (props) => (
  <Document>
    <Page size="A4" style={styles.page}>

        
          <View style={{margin:'2%', fontSize:'9px', textAlign:'right'}}> 
          <Text>
            {today}
          </Text>
          </View>



          {
           props.questions.map((question, i) => {
              return (
                <View key={i} style={styles.section}>
                <Text>{question}</Text>
              </View>
            )
             })
          }


     
      <View style={[styles.section], {textAlign:'center', marginTop:'7%', bottom:5}}>
            <Text style={{fontSize: '11px', color:'black'}}>{props.quote} </Text>
          </View>
   
     </Page>
  </Document>
);

export default MyDocument

// put website information