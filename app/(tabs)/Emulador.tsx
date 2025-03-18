import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabEmulador() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#E6E6FA', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Como criar um emulador</ThemedText>
      </ThemedView>
      <ThemedText>Primeiro voce precisa ter instalado no computador o programa 'Android Studio' criar o emulador</ThemedText>
      <ThemedText>Ao entrar no Android Studio voce aperta em "more actions" e  depois em "Virtual Device Manager"</ThemedText>
      <ThemedText>Depois voce clica no simbolo "+" no canto superior da tela</ThemedText>
      <ThemedText>Voce escolhe um tipo de "phone" e aperta em next duas vezes e esta pronto </ThemedText>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#333',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
