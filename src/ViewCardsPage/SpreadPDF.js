import React from 'react'
import Html from 'react-pdf-html'
import { Document, Page, Text, View, StyleSheet, Font} from '@react-pdf/renderer';

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
  


const SpreadPDF = (props) => (

    <Document>
        <Page size="A4" styles={styles.page} wrap>
            <View style={styles.section}>
            <Text style={styles.title}>
                Tarot Self Reflection:
            </Text>
            <Text style={styles.subtitle}>
                {today}
            </Text>
            </View>
             {
                 props.contents.map(
                     (content, i) => {
                         return(
                            <View key={i} style={styles.section}>
                                <View style={styles.subSection}>
                                    <Text style={styles.sectionTitle}>
                                         {content.imageName.slice(14)}
                                     </Text>
                                </View>

                        
                            
                                <View  style={styles.subSection}>
                                     <Html  style={styles.html}>
                                        {content.notesHTML}
                                    </Html>
                                </View>
                            </View>
                            
                         )
                     }
                 )
             }  
                
            <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
                `${pageNumber} / ${totalPages}`
                )} fixed />
        </Page>
    
        
    </Document>
)
 
 Font.register({
    family: 'Oswald',
    src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
  });

Font.registerEmojiSource({
    format:'png',
    url: 'https://twemoji.maxcdn.com/2/72x72/'
})
  
    const colors = ['violet','indigo','blue','green', '#ffd300', 'orange', 'red']
    const index = Math.floor(Math.random()*colors.length)
    const styles = StyleSheet.create({
        page:{
            paddingTop: 35,
            paddingBottom: 65,
            paddingHorizontal: 35,
        },
        title:{
            fontSize:'17px',
            fontFamily:'Oswald',
        },
        subtitle:{
            fontSize:'14px',
            fontFamily:'Oswald',
        },
        sectionTitle:{
            fontSize: '15px',
            fontFamily:'Oswald',
            color: colors[index]
        },
        section:{
            margin:'5%',
           
        },
        subSection:{

        },
        html:{
            fontSize: '13px',
            fontFamily:'Oswald'
        },
        pageNumber: {
            position: 'fixed',
            fontSize: 12,
            bottom: 30,
            left: 0,
            right: 0,
            textAlign: 'center',
            color: 'teal',
            marginTop: '10%'
          },

    })


export default SpreadPDF