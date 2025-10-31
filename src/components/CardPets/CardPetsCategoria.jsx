import { View, Text, Image} from "react-native";
const CardPetsCategoria = ({nome, image}) => {
  return (
    <View
      style={{
        backgroundColor: '#f5f5f5',
        width: 100,
        borderEndEndRadius: 50,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        borderTopRightRadius: 50,
        padding: 20,
      }}
    >
      <View style={{ alignItems: 'center', gap: 10 }}>
        <View
          style={{
            borderRadius: 50,
            backgroundColor: 'white',
            padding: 10,
            alignItems: 'center',
          }}
        >
          <Image
            source={image}
            style={{ height: 50, width: 50 }}
          />
        </View>
        <Text style={{ fontSize: 15, fontWeight: 500 }}>{nome}</Text>
      </View>
    </View>
  );
}

export default CardPetsCategoria;