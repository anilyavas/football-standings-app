import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import rankings from '@/assets/data/standings.json';

const ranks = rankings.data.response;

type Rankings = {
  league: {
    id: number;
    name: string;
    logo: string;
    flag: string;
    season: number;
  };
};

const LeagueListItem = () => {
  return (
    <FlatList
      data={ranks}
      renderItem={({ item }) => (
        <View style={styles.leagueContainer}>
          <Image
            source={{ uri: item.league.logo }}
            style={{ width: 50, height: 50 }}
            resizeMode='contain'
          />
          <Text style={styles.leagueName}>{item.league.name}</Text>
        </View>
      )}
    />
  );
};

export default LeagueListItem;
const styles = StyleSheet.create({
  leagueContainer: {
    backgroundColor: 'gainsboro',
    alignItems: 'center',
    borderColor: 'grey',
    borderWidth: 1,
    padding: 10,
  },
  leagueName: {
    color: 'black',
    fontWeight: 'bold',
    paddingTop: 5,
  },
});
