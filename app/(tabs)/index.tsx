import { StyleSheet, Image } from 'react-native';
import { Text, View } from '@/components/Themed';
import LeagueListItem from '@/components/LeagueListItem';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <LeagueListItem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  
  },
});
