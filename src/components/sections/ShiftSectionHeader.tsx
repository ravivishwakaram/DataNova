import React from 'react';
import { Text, View } from 'react-native';
import { faSun } from '@fortawesome/free-regular-svg-icons/faSun';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

interface ShiftSectionHeaderProps {
  userName: string;
  shiftsCount: number;
}

const ShiftSectionHeader = ({ userName, shiftsCount }: ShiftSectionHeaderProps) => {
  return (
    <View className="p-4 md:p-6 lg:p-8 bg-white border-b border-gray-300">
      <View className="flex flex-row items-center pb-3">
        <Text className="text-3xl font-semibold text-gray-800 mr-2">
          Good Morning {userName}
        </Text>
        <FontAwesomeIcon
          size={25}
          icon={faSun}
          color="#EAB308"
        />
      </View>
      <Text className="text-xl text-gray-800">
        You have {shiftsCount} shift{shiftsCount > 1 ? 's' : ''} today.
      </Text>
    </View>
  );
};

export default ShiftSectionHeader;
