import React, { useState } from 'react';
import { View, Text, TouchableOpacity, useWindowDimensions } from 'react-native';
import { styled } from 'tailwindcss-react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons/faPlayCircle'
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
import { faClock as SolidFaClock } from '@fortawesome/free-solid-svg-icons';
import { faClock as RegularFaClock } from '@fortawesome/free-regular-svg-icons';
import { faFile } from '@fortawesome/free-regular-svg-icons/faFile'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons/faEllipsis'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons/faArrowRightFromBracket'

const IconButton = styled(TouchableOpacity);

const BottomNavBar = () => {
  const [isClockOn, setIsClockOn] = useState(true);
  const [selectedTab, setSelectedTab] = useState<string>('Home');
  
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 640;

  const handleClockPress = () => {
    setIsClockOn(!isClockOn);
  };

  const handleTabPress = (tabName: string) => {
    setSelectedTab(tabName);
  };

  const indicatorColor = '#3B82F6';
  const selectedTextColor = 'text-blue-500';
  const defaultTextColor = 'text-gray-500';

  return (
    <View className="flex-row justify-between items-center bg-white border-t border-gray-200 relative px-4 sm:px-10 pt-6 pb-10">
      {!isSmallScreen && (
        <IconButton className="items-center flex-col" onPress={() => handleTabPress('Home')}>
          <View className="items-center mb-2">
            <FontAwesomeIcon
              size={25}
              icon={faHouse}
              color={selectedTab === 'Home' ? indicatorColor : 'gray'}
            />
          </View>
          <Text
            className={`text-xs mb-3 ${selectedTab === 'Home' ? selectedTextColor : defaultTextColor}`}
          >
            Home
          </Text>
          {selectedTab === 'Home' && !isSmallScreen && (
            <View className="w-2 h-2 rounded-full absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 bg-blue-500" />
          )}
        </IconButton>
      )}

      {isSmallScreen && (
      <IconButton className="items-center flex-col" onPress={() => handleTabPress('Shifts')}>
        <View className="relative items-center mb-2 ml-10">
          {/* Wrapper for overlapping icons */}
          <View className="relative">
            {/* Larger Clock Icon */}
            <FontAwesomeIcon
              size={25}
              icon={RegularFaClock}
              color={selectedTab === 'Shifts' ? indicatorColor : 'gray'}
            />
            {/* Smaller User Icon */}
            <View className="absolute bottom-[-2px] left-[55%] bg-white rounded-full p-0.5 border border-white">
              <FontAwesomeIcon
                size={13}
                icon={faUser}
                color={selectedTab === 'Shifts' ? indicatorColor : 'gray'}
              />
            </View>
          </View>
        </View>
        <Text
          className={`text-xs ml-12 ${selectedTab === 'Shifts' ? selectedTextColor : defaultTextColor}`}
        >
          Shifts
        </Text>
      </IconButton>
      )}

      {!isSmallScreen && (
      <IconButton className="items-center flex-col" onPress={() => handleTabPress('Shifts')}>
        <View className="items-center mb-2">
          <FontAwesomeIcon
            size={25}
            icon={RegularFaClock}
            color={selectedTab === 'Shifts' ? indicatorColor : 'gray'}
          />
          <FontAwesomeIcon
            size={13}
            icon={faUser}
            color={selectedTab === 'Shifts' ? indicatorColor : 'gray'}
            style={{
              position: 'absolute',
              bottom: 2,
              left: 18,
              zIndex: 20,
              backgroundColor: 'white',
              borderRadius: 3,
              padding: 1,
            }}
          />
        </View>
        <Text
          className={`text-xs mb-3 ${selectedTab === 'Shifts' ? selectedTextColor : defaultTextColor}`}
        >
          Shifts
        </Text>
        {!isSmallScreen && selectedTab === 'Shifts' && (
          <View className="w-2 h-2 rounded-full absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 bg-blue-500" />
        )}
      </IconButton>
      )}

      <View className="absolute top-[-45px] left-1/2 transform -translate-x-1/2 z-10">
        <TouchableOpacity onPress={handleClockPress}>
          {isClockOn ? 
            <View className="relative flex items-center justify-center">
              <View className="relative bg-[#22C55E] rounded-full w-[125px] h-[125px] flex items-center justify-center border-[10px] border-white">
                  <FontAwesomeIcon
                    icon={RegularFaClock}
                    size={35}
                    color="white"
                    style={{
                      position: 'absolute',
                      top: 25,
                      left: '47%',
                      transform: [{ translateX: -15 }],
                  }}
                />
                <FontAwesomeIcon
                  icon={faPlayCircle}
                  size={20}
                  color="#22C55E"
                  style={{
                    position: 'absolute',
                    bottom: 45,
                    right: 30,
                    zIndex: 20,
                    backgroundColor: 'white',
                    borderRadius: 50,
                    padding: 0,
                  }}
                />
                <Text className="absolute bottom-7 text-white text-[14px] font-inter font-semibold z-30">Clock On</Text>
              </View>
            </View> : 
            <View className="relative flex items-center justify-center">
              <View className="relative bg-[#F97316] rounded-full w-[125px] h-[125px] flex items-center justify-center border-[10px] border-white">
                <FontAwesomeIcon 
                    icon={faArrowRightFromBracket} 
                    size={35}
                    color="white"
                    style={{
                      position: 'absolute',
                      top: 20,
                      left: '50%',
                      transform: [{ translateX: -15 }],
                  }}/>
                <Text className="absolute bottom-7 text-white text-[14px] font-inter font-semibold z-30">Clock Off</Text>
              </View>
            </View>}
        </TouchableOpacity>
      </View>

      {!isSmallScreen && (
        <IconButton className="items-center flex-col" onPress={() => handleTabPress('Timesheets')}>
          <View className="items-center mb-2">
            <FontAwesomeIcon icon={faFile} size={25} color={selectedTab === 'Timesheets' ? indicatorColor : 'gray'} 
            />
            <FontAwesomeIcon
                    icon={SolidFaClock}
                    size={16}
                    color={selectedTab === 'Timesheets' ? indicatorColor : 'gray'}
                    style={{
                      position: 'absolute',
                      top: 9,
                      left: 47,
                      borderRadius: 10,
                      transform: [{ translateX: -15 }],
                      zIndex: 20,
                      backgroundColor: 'white',
                      padding: 1,
                  }}
              />
          </View>
          <Text
            className={`text-xs mb-3 ${selectedTab === 'Timesheets' ? selectedTextColor : defaultTextColor}`}
          >
            Timesheets
          </Text>
          {selectedTab === 'Timesheets' && !isSmallScreen && (
            <View className="w-2 h-2 rounded-full absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 bg-blue-500" />
          )}
        </IconButton>
      )}

      {isSmallScreen && (
            <IconButton className="items-center flex-col" onPress={() => handleTabPress('More')}>
              <View className="flex items-center justify-center pr-3">
                <View 
                  className={`border-2 rounded-full p-2 mb-2 mr-12 ${selectedTab === 'More' ? `border-[#3B82F6]` : 'border-gray-500'}`}
                >
                  <FontAwesomeIcon 
                    icon={faEllipsis} 
                    size={15} 
                    color={selectedTab === 'More' ? indicatorColor : 'gray'} 
                  />
                </View>
                <Text
                  className={`text-xs mb-3 mr-12 ${selectedTab === 'More' ? selectedTextColor : defaultTextColor}`}
                >
                  More
                </Text>
              </View>
            </IconButton>
      )}

      {!isSmallScreen && (
            <IconButton className="items-center flex-col" onPress={() => handleTabPress('More')}>
              <View className="flex items-center justify-center mb-2">
                <View 
                  className={`border-2 rounded-full p-2 mb-2 ${selectedTab === 'More' ? `border-[#3B82F6]` : 'border-gray-500'}`}
                >
                  <FontAwesomeIcon 
                    icon={faEllipsis} 
                    size={15} 
                    color={selectedTab === 'More' ? indicatorColor : 'gray'} 
                  />
                </View>
                <Text
                  className={`text-xs mb-3 ${selectedTab === 'More' ? selectedTextColor : defaultTextColor}`}
                >
                  More
                </Text>
              </View>

              {!isSmallScreen && selectedTab === 'More' && (
                <View className="w-2 h-2 rounded-full absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 bg-blue-500" />
              )}
            </IconButton>
      )}
    </View>
  );
};


export default BottomNavBar;
