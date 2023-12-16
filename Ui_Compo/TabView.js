/* eslint-disable react-native/no-inline-styles */
import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function TabView() {
  const Tabs = ['All', 'PDF', 'Audio'];
  const [activeTab, setActiveTab] = React.useState(0);
  return (
    <View
      style={{
        flexDirection: 'row',
        gap: windowWidth * 0.04,
        marginLeft: 2,
        marginTop: 10,
      }}>
      {Tabs.map((item, index) => {
        if (index === activeTab) {
          return (
            <EachTab
              key={index}
              text={item}
              active={true}
              setActiveTab={setActiveTab}
              index={index}
            />
          );
        }
        return (
          <EachTab
            key={index}
            text={item}
            active={false}
            setActiveTab={setActiveTab}
            index={index}
          />
        );
      })}
    </View>
  );
}

function EachTab({text, active, setActiveTab, index}) {
  return (
    <TouchableOpacity
      onPress={() => {
        setActiveTab(index);
      }}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: active ? '#4b34cc' : '#292250',
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        elevation: active ? 5 : 0,
      }}>
      <Text style={{color: active ? 'white' : 'rgb(170, 170, 170)'}}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
