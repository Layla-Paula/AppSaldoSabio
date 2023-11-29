import { StyleSheet } from 'react-native';
import { WINDOW_WIDTH } from '../../../constants/screen.contants';
import { ThemesConfig } from '../../../interfaces/screens/themes.interace';

export const styles = (theme: ThemesConfig) => {
    return StyleSheet.create({
        container: {
            
            marginHorizontal: 12,
            borderColor: theme.background.secondary,
            marginBottom: 20,
            marginTop: 10
        },
        containerHeader: {
            padding: 5,
            paddingHorizontal: 10,
            backgroundColor: theme.background.tertiary,
            borderRadius: 8
        },
        textTitle: {
            color: theme.text.primary
        },
        containerValue: {
            paddingVertical: 20,
            paddingBottom: 14
        },
        containerBalance: {
            padding: 8,
            paddingHorizontal: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#E3B81D'
        }
    })
};