import React from 'react'
import { Document, Page, Text, View, StyleSheet} from '@react-pdf/renderer';

const SpreadPDF = () => (
    <Document>
        <Page>
            <View>
                <Text>
                    hi
                </Text>
            </View>
        </Page>
    </Document>
)

export default SpreadPDF