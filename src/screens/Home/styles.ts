import { StyleSheet } from 'react-native'

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#131016',
  },
  eventName: {
    color: '#FDFCFE',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
  },
  eventDate: {
    color: '#6B6B6B',
    fontSize: 16,
  },
  form: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 24,
    marginBottom: 42
  },
  input: {
    backgroundColor: '#1F1E25',
    borderRadius: 8,
    padding: 16,
    color: '#FDFCFE',
    fontSize: 16,
    flex: 1,
    marginRight: 12,
  },
  buttonText: {
    color: '#FDFCFE',
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31CF67',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listEmptyText: {
    color: '#FFF',
    fontSize: 14,
    textAlign: 'center',
  }
})
