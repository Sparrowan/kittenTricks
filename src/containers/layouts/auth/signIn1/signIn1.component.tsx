import React from 'react';
import {
  ImageProps,
  ImageSourcePropType,
  View,
} from 'react-native';
import {
  StyleType,
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Button,
  ButtonAlignments,
} from '@kitten/ui';
import {
  SocialAuth,
  SignInForm1,
  SignInFormType,
} from '@src/components/auth';
import {
  AvoidKeyboard,
  ImageOverlay,
  Text,
} from '@src/components/common';
import {
  ForwardIcon,
  HeartIcon,
} from '@src/assets/icons';

interface ComponentProps {
  onSignInPress: (value: SignInFormType) => void;
  onSignUpPress: () => void;
  onGooglePress: () => void;
  onFacebookPress: () => void;
  onTwitterPress: () => void;
  onEwaPress: () => void;
}

export type SignIn1Props = ThemedComponentProps & ComponentProps;

class SignIn1Component extends React.Component<SignIn1Props> {

  private backgroundImage: ImageSourcePropType = {
    uri: `https://images.unsplash.com/photo-1517438984742-1262db08379e?ixlib=rb-1.2
    .1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=928&q=80`,
  };

  private onSignInButtonPress = (formValue: SignInFormType) => {
    this.props.onSignInPress(formValue);
  };

  private onSignUpButtonPress = () => {
    this.props.onSignUpPress();
  };

  private onGoogleButtonPress = () => {
    this.props.onGooglePress();
  };

  private onFacebookButtonPress = () => {
    this.props.onFacebookPress();
  };

  private onTwitterButtonPress = () => {
    this.props.onTwitterPress();
  };

  private onEwaButtonPress = () => {
    this.props.onEwaPress();
  };

  private renderEwaButtonIcon = (style: StyleType): React.ReactElement<ImageProps> => {
    const { themedStyle } = this.props;

    return HeartIcon({ ...style, ...themedStyle.ewaButtonIcon });
  };

  private renderSignUpButtonIcon = (style: StyleType): React.ReactElement<ImageProps> => {
    const { themedStyle } = this.props;

    return ForwardIcon({ ...style, ...themedStyle.signUpButtonIcon });
  };

  public render(): React.ReactNode {
    const { themedStyle } = this.props;

    return (
      <AvoidKeyboard>
        <ImageOverlay
          style={themedStyle.container}
          source={this.backgroundImage}>
          <Button
            style={themedStyle.ewaButton}
            size='giant'
            activeOpacity={0.75}
            icon={this.renderEwaButtonIcon}
            onPress={this.onEwaButtonPress}>
            EWA
          </Button>
          <View style={themedStyle.signInContainer}>
            <Text style={themedStyle.signInLabel}>Sign In</Text>
            <Button
              style={themedStyle.signUpButton}
              size='giant'
              activeOpacity={0.75}
              alignment={ButtonAlignments.RIGHT}
              icon={this.renderSignUpButtonIcon}
              onPress={this.onSignUpButtonPress}>
              Sign Up
            </Button>
          </View>
          <SignInForm1
            style={themedStyle.formContainer}
            onSubmit={this.onSignInButtonPress}
          />
          <SocialAuth
            style={themedStyle.socialAuthContainer}
            iconStyle={themedStyle.socialAuthIcon}
            hint='Sign with a social account'
            onGooglePress={this.onGoogleButtonPress}
            onFacebookPress={this.onFacebookButtonPress}
            onTwitterPress={this.onTwitterButtonPress}
          />
        </ImageOverlay>
      </AvoidKeyboard>
    );
  }
}

export const SignIn1 = withStyles(SignIn1Component, (theme: ThemeType) => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  signInContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 48,
  },
  socialAuthContainer: {
    marginTop: 48,
    marginBottom: 36,
  },
  ewaButton: {
    alignSelf: 'flex-start',
    paddingHorizontal: 0,
    fontFamily: 'opensans-regular',
    backgroundColor: theme['opacity-transparent'],
  },
  ewaButtonIcon: {
    marginHorizontal: 0,
  },
  formContainer: {
    flex: 1,
    marginTop: 96,
  },
  signInLabel: {
    fontFamily: 'raleway-extra-bold',
    textTransform: 'uppercase',
    fontSize: 32,
  },
  signUpButton: {
    paddingHorizontal: 0,
    backgroundColor: theme['opacity-transparent'],
  },
  signUpButtonIcon: {
    marginHorizontal: 0,
  },
  input: {
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },
  socialAuthIcon: {
    tintColor: theme['color-white'],
  },
}));

