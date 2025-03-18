import { StyleSheet} from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabEstrutura() {
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
        <ThemedText type="title">Organização do projeto</ThemedText>
      </ThemedView>      
      <ThemedText>1. Definição do Escopo e Objetivos</ThemedText>
        <ThemedText>2. Escolha de Linguagens de Programação</ThemedText>
        <ThemedText>3. Estrutura de Pastas e Arquivos</ThemedText>
        <ThemedText>4. Planejamento de Desenvolvimento e Metodologia</ThemedText>
        <ThemedText>5. Design do Sistema</ThemedText>
        <ThemedText>6. Gerenciamento de Dependências e Bibliotecas</ThemedText>
        <ThemedText>7. Testes e Depuração</ThemedText>
        <ThemedText>8. Documentação</ThemedText>
        <ThemedText>9. Interface com o Usuário (UI)</ThemedText>
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
