import React, { useState, useContext } from 'react';
import { Platform, ActivityIndicator } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import {
  Background,
  Container,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
  Link,
  LinkText,
  Text,
  TextDescription,
  TextWelcome,
  TextTitle,
  LinkTextPassWord,
} from './styles';

import { ThemeContext } from '../../contexts/themeContext';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';

export default function SignIn() {
  const navigation = useNavigation();
  const { signIn, loadingAuth } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  function handleLogin() {
    signIn(email, password);
  }

  return (
    <Background>
      <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>
        <TextTitle>Login</TextTitle>
        <TextWelcome>Olá, Bem-vindo ao Saldo Sábio! 👋</TextWelcome>
        <Text>Sua Rota para a Prosperidade Financeira</Text>

        <TextDescription>E-mail</TextDescription>
        <AreaInput>
          <Input
            icon={<Entypo name="email" size={18} color="black" />}
            placeholder="Insira o seu endereço de email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </AreaInput>

        <TextDescription>Senha</TextDescription>
        <AreaInput>
          <Input
            icon={<Entypo name="lock" size={18} color="black" />}
            placeholder="Coloque a sua senha"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={!showPassword}
          />
          <Entypo
            name={showPassword ? 'eye-with-line' : 'eye'}
            size={18}
            color="black"
            onPress={() => setShowPassword(!showPassword)}
            style={{ position: 'absolute', right: 20, top: 12 }}
          />
        </AreaInput>

        <Link>
          <LinkTextPassWord>Esqueci a senha</LinkTextPassWord>
        </Link>

        <SubmitButton activeOpacity={0.8} onPress={handleLogin}>
          {loadingAuth ? (
            <ActivityIndicator size={20} color="#FFF" />
          ) : (
            <SubmitText>Acessar</SubmitText>
          )}
        </SubmitButton>

        <Link onPress={() => navigation.navigate('SignUp')}>
          <LinkText>
            <Text>Não tenho uma conta? </Text> Cadastre-se
          </LinkText>
        </Link>
      </Container>
    </Background>
  );
}