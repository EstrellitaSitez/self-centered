import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  section: {
    margin: 20,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
const MyDocument = (props) => (
  <Document>
    <Page size="A4" style={styles.page}>

    {
        props.questions.map((question, i) => {
            return (
                <View key={i} style={styles.section}>
                <Text>{question}</Text>
              </View>
            )
        })
    }

    <View style={{textAlign:'center', bottom:0}}>
        <Text style={{color:'teal'}}>"To live in the world without becoming
            aware of the meaning of the world is like
            wandering about in a great library
            without touching the books."</Text>
    </View>
   
    </Page>
  </Document>
);

export default MyDocument

// put website information