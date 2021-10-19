import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: 'white',
    fontSize:'14px',

   
  },
  section: {
    margin: '7%',
    padding: 10,
    flexGrow: 1
  }
});

const getMonth = (number) => {
  switch (number) {
    case 1:
      return "January"
      break;
    case 2:
      return "February"
      break;
    case 3:
      return "March"
      break;    
    case 4:
      return "April"
      break;   
    case 5:
      return "May"
      break;  
    case 6:
      return "June"
      break; 
    case 7:
      return "July"
      break;
    case 8:
      return "August"
      break;
    case 9:
      return "September"
      break;
    case 10:
      return "October"
      break;
    case 11:
      return "November"
      break;
    case 12:
      return "December"
      break;   
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

        
          <View style={{margin:'2%', fontSize:'11px', textAlign:'right'}}> 
          <Text>
            {today}
          </Text>
          </View>

          <View style={[styles.section], {textAlign:'center', marginTop:'10%'}}>
             <Text>Self Centered</Text>
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


          <View style={{textAlign:'center', bottom:0, fontSize: '12px'}}>
            <Text>{props.quote} -Aristotle</Text>
               </View>
       
   
     </Page>
  </Document>
);

export default MyDocument

// put website information