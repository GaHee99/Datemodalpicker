import React, { useState } from 'react'
import { SafeAreaView, View, Text, Button } from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker'

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [datePickerVisible, setDatePickerVisible] = useState(false)

  const showDatePicker = () => {
    setDatePickerVisible(true)
  }

  const hideDatePicker = () => {
    setDatePickerVisible(false)
  }

  const handleConfirm = (date) => {
    setSelectedDate(date)
    hideDatePicker()
  }
  function printDate() {
    const today = selectedDate // 현재 날짜

    const month = today.toLocaleDateString('en-US', {
      month: '2-digit',
    })
    const day = today.toLocaleDateString('en-US', {
      day: '2-digit',
    })
    const dayName = today.toLocaleDateString('ko-KR', {
      weekday: 'long',
    })

    return `${month}.${day} ${dayName}`
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          padding: 20,
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}
          onPress={showDatePicker}
        >
          {selectedDate ? printDate() : 'No date selected'}
        </Text>

        <DateTimePickerModal
          date={selectedDate}
          isVisible={datePickerVisible}
          mode="date"
          display="inline"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
    </SafeAreaView>
  )
}

export default App
