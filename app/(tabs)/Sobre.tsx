
import { StyleSheet} from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabSobre() {
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
        <ThemedText type="title">Como criar um projeto</ThemedText>
      </ThemedView>
      <ThemedText>O primeiro passo para criar um projeto é:</ThemedText>
      <ThemedText>No terminal vc precisa escrever "npx create-expo-app 'nome do projeto'" para criar um novo projeto</ThemedText>
      <ThemedText>Apos isso vc precisa colocar "npm install 'nome das dependencias' --save" para instalar as dependencias dos arquivos no projeto</ThemedText>
      <ThemedText>depois so colocar o "code ." para mexer no arquivo</ThemedText>
      <ThemedText>Ai no visual studio code vc coloca "npm run android"</ThemedText>


      
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
