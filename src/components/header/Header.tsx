import React from 'react';
import { View, Image, SafeAreaView, Platform, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

interface HeaderProps {
  userProfileImage: string;
}

const Header = ({ userProfileImage }: HeaderProps) => {

  return (
    <SafeAreaView className="bg-white">
      <View className="flex-row justify-between items-center px-4 py-5">
        {/* Logo */}
        <Image 
          source={require('../icons/flowlogic-logo.png')} 
          className="w-64 h-11"
          resizeMode="stretch"
        />
        
        {/* Profile Image with Notification Dot */}
        <View className="relative">
          <Image 
            source={{ uri: userProfileImage }} 
            className="w-16 h-16 rounded-full"
            resizeMode="cover" 
          />
          
          {/* Notification Dot */}
          <View className="absolute bottom-0 right-0 bg-yellow-500 w-5 h-5 rounded-full border-2 border-white p-1" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
