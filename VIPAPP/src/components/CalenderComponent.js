import React from 'react'
import { View } from 'react-native';
import { HEIGHT, WIDTH } from "../constants/Dimensions"
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';

const CalenderComponent = () => {

    const datesWhitelist = [
        {
            start: moment(),
            end: moment().add(8, 'days')
        },
    ];
    const datesBlacklist = [moment().add(7, 'days')]

    return (
        <View>
            <CalendarStrip
                calendarAnimation={{ type: 'sequence', duration: 20 }}
                daySelectionAnimation={{
                    type: 'border',
                    duration: 200,
                    borderWidth: 1,
                    borderHighlightColor: "#0FC1A1",

                }}
                style={{ height: HEIGHT * 0.15, paddingTop: 35, }}
                calendarHeaderStyle={{ color: 'white', fontSize: 18 }}
                calendarColor={"#181D23"}
                dateNumberStyle={{ color: 'white' }}
                dateNameStyle={{ color: 'white' }}
                highlightDateNumberStyle={{ color: "white" }}
                highlightDateNameStyle={{ color: "white" }}
                disabledDateNameStyle={{ color: 'white', fontSize: 15, paddingTop: 20 }}
                disabledDateNumberStyle={{ color: 'white', fontSize: 14, paddingTop: 15 }}
                datesWhitelist={datesWhitelist}
                datesBlacklist={datesBlacklist}
                iconContainer={{ flex: 0.1 }}
            />
        </View>
    )
}

export default CalenderComponent