// ProfileHeader.tsx
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ThemeContext } from '../../../contexts/themeContext';
import { FontAwesome5, AntDesign } from '@expo/vector-icons';
import { styles } from './styles';
import { AuthContext } from '../../../contexts/auth';

const ProfileHeader: React.FC = () => {
  const { theme } = React.useContext(ThemeContext);
  const style = styles(theme);

  const { user, signOut } = React.useContext(AuthContext);

  // Se o usuário não estiver logado, não renderiza nada
  if (!user) {
    return null;
  }

  return (
    <View style={style.containerHeader}>
      <View style={style.profile}>
        <FontAwesome5 name="user-astronaut" size={38} color={theme.text.primary} />
      </View>

      <View style={style.containerInfo}>
        <Text style={[style.text, style.textBold, { fontSize: 16 }]}>
          {user.name}
        </Text>
      </View>

      <TouchableOpacity style={style.btn} onPress={signOut}>
        <AntDesign name="logout" size={22} color={theme.text.primary} />
      </TouchableOpacity>
    </View>
  );
}

export default ProfileHeader;
