import { View, Text, TouchableOpacity } from 'react-native'
import { participantStyles } from './styles'

export type ParticipantProps = {
  name: string
  onRemove?: () => void
}

export function Participant({ name, onRemove = () => {} }: ParticipantProps) {
  return (
    <View style={participantStyles.container}>
      <Text style={participantStyles.name}> {name} </Text>
      <TouchableOpacity style={participantStyles.button} onPress={onRemove}>
        <Text style={participantStyles.buttonText}> - </Text>
      </TouchableOpacity>
    </View>
  )
}
