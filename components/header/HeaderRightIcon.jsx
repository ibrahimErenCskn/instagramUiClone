import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { View } from 'react-native';

export function HeaderRightIcon() {
    return (
        <View style={{ flexDirection: 'row', gap: 20, marginRight: 15 }}>
            <AntDesign name="hearto" size={24} color="black" />
            <FontAwesome5 name="facebook-messenger" size={24} color="black" />
            <AntDesign name="plussquareo" size={24} color="black" />
        </View>
    )
}