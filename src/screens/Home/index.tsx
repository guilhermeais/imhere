import { useState } from 'react'
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { Participant } from '../../components/Participant'
import { homeStyles } from './styles'

export function Home() {
  const [participants, setParticipants] = useState<string[]>([])

  const [newParticipantName, setNewParticipantName] = useState('')

  function handleParticipantAdd() {
    if (!newParticipantName) {
      Alert.alert('Nome do participante não pode ser vazio')
      return
    }

    if (participants.includes(newParticipantName)) {
      Alert.alert('Esse participante já foi adicionado')
      return
    }

    setParticipants([...participants, newParticipantName])
    setNewParticipantName('')
  }

  function handleParticipantRemove(index: number, name: string) {
    Alert.alert('Remover', `Remover o participante ${name}?`, [
      {
        onPress: () => removeParticipant(index),
        text: 'Sim',
      },
      {
        text: 'Não',
      },
    ])
  }

  function removeParticipant(index: number) {
    setParticipants(participants.filter((_, i) => i !== index))
  }

  function renderParticipant(participantName: string, idx: number) {
    return (
      <Participant
        name={participantName}
        onRemove={() => handleParticipantRemove(idx, participantName)}
      />
    )
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
          value={newParticipantName}
          onChangeText={setNewParticipantName}
        />
        <TouchableOpacity
          style={homeStyles.button}
          onPress={handleParticipantAdd}
        >
          <Text style={homeStyles.buttonText}> + </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item: name, index }) => renderParticipant(name, index)}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={homeStyles.listEmptyText}>
            Ninguém chegou no evento ainda? Adiciona participantes a sua lista
            de presença.
          </Text>
        )}
      />
    </View>
  )
}
