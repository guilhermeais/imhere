import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { homeStyles } from './styles'

export function Home() {
  function handleParticipantAdd() {
    console.log('Clicou no botão Add')
  }

  return (
    <View style={homeStyles.container}>
      <Text style={homeStyles.eventName}>Nome do Evento</Text>

      <Text style={homeStyles.eventDate}>Sexta, 4 de Novembro de 2022</Text>

      <View style={homeStyles.form}>
        <TextInput
          style={homeStyles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />
        <TouchableOpacity
          style={homeStyles.button}
          onPress={handleParticipantAdd}
        >
          <Text style={homeStyles.buttonText}> + </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
