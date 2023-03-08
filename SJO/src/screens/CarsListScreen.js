import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  Pressable,
  TextInput,
  ImageBackground,
  Modal,
} from 'react-native';

import {
  drawerIcon,
  rightBackArrow,
  BMWImage,
  bmwLogo,
  moadalLocation,
  arrow,
} from '../assests/index';
import {colors} from '../constants/colors';
import {HEIGHT, WIDTH} from '../constants/Dimensions';
import {carlistData, carCase} from '../constants/FlatListArray';
import MainContainer from '../component/MainContainer';
import CarListComponent from '../component/CarListComponent';
import ButtonComponent from '../component/ButtonComponent';
import ModalComponent from '../component/ModalComponent';

const CarsListScreen = props => {
  const {navigation} = props;
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);


  const slideshow = type => {
    switch (type) {
      case 'SARA':
        return (
          <View>
            <Image
              style={{
                width: WIDTH,
                marginTop: 0,
                zIndex: -1,
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
                height: HEIGHT * 0.44,
              }}
              source={BMWImage}
            />
            <View
              style={{
                alignItems: 'center',
                marginTop: HEIGHT * 0 - 33,
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: WIDTH * 0.17,
                  width: WIDTH * 0.17,
                  borderRadius: (WIDTH * 0.17) / 2,
                  borderColor: '#B89962',
                  borderWidth: 1,
                  backgroundColor: colors.white,
                }}>
                <Image source={bmwLogo} />
              </View>
            </View>
            <View style={{height: HEIGHT * 0.36}}>
              <FlatList
                data={carlistData}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                  <View>
                    <CarListComponent color={item.color} {...item} />
                  </View>
                )}
              />
              <View
                style={{
                  marginHorizontal: WIDTH * 0.05,
                  marginBottom: HEIGHT * 0.03,
                }}>
                <Text
                  style={{
                    marginBottom: HEIGHT * 0.02,
                    color: colors.lightGrey,
                    fontSize: 20,
                  }}>
                  Another details
                </Text>
                <Text style={{color: colors.grey, fontSize: 20}}>
                  This text is an example of a text that can be replaced in the
                  same space
                </Text>
              </View>
            </View>
          </View>
        );
      case 'LANA':
        return (
          <View>
            <Image
              style={{
                width: WIDTH,
                marginTop: 0,
                zIndex: -1,
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
                height: HEIGHT * 0.44,
              }}
              source={BMWImage}
            />
            <View
              style={{
                alignItems: 'center',
                marginTop: HEIGHT * 0 - 33,
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: WIDTH * 0.17,
                  width: WIDTH * 0.17,
                  borderRadius: (WIDTH * 0.17) / 2,
                  borderColor: '#B89962',
                  borderWidth: 1,
                  backgroundColor: colors.white,
                }}>
                <Image source={bmwLogo} />
              </View>
            </View>
            <View style={{height: HEIGHT * 0.36}}>
              <FlatList
                data={carlistData}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                  <CarListComponent color={item.color} {...item} />
                )}
              />
              <View
                style={{
                  marginHorizontal: WIDTH * 0.05,
                  marginBottom: HEIGHT * 0.03,
                }}>
                <Text
                  style={{
                    marginBottom: HEIGHT * 0.02,
                    color: colors.lightGrey,
                    fontSize: 20,
                  }}>
                  Another details
                </Text>
                <Text style={{color: colors.grey, fontSize: 20}}>
                  This text is an example of a text that can be replaced in the
                  same space
                </Text>
              </View>
            </View>
          </View>
        );
    }
  };
  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={{backgroundColor: colors.Yellow, flex: 0}} />
      <MainContainer
        navigation={() => navigation.goBack()}
        titleStyle={{color: colors.darkWhite, fontSize: 20}}
        title="Cars"
        image={drawerIcon}
        color={{backgroundColor: colors.Yellow, marginTop: 0}}
        leftLogo={rightBackArrow}
        style2={{marginTop: HEIGHT * 0.006}}
        backStyle={{marginTop: HEIGHT * 0.01}}>
        <Pressable onPress={() => setModalVisible(false)}>
          <FlatList
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            horizontal
            data={carCase}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View style={{width: WIDTH}}>{slideshow(item.case)}</View>
            )}
          />
        </Pressable>
        {/* <ModalComponent
                    visible={modalVisible}
                    onPress={() => {
                        setModalVisible(false)
                    }}
                    button={true}
                >
                </ModalComponent> */}
         <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible3}
            style={{}}>
            <Pressable onPress={() => setModalVisible3(!modalVisible3)}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: HEIGHT * 0.39,
                }}>
                <View
                  style={{
                    margin: 20,
                    backgroundColor: 'white',
                    borderRadius: 20,
                    padding: 35,
                    alignItems: 'center',
                    shadowColor: '#000',
                  }}>
                  <Text style={{marginBottom: 15, textAlign: 'center'}}>
                    Hello World!
                  </Text>
                  <Pressable style={{}} onPress={() => setModalVisible3(true)}>
                    <Text style={{fontSize: 20}}>Hide Modal</Text>
                  </Pressable>
                </View>
              </View>
            </Pressable>
          </Modal>
        </View>

        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <Pressable onPress={() => setModalVisible(!modalVisible)} style={{}}>
            <View
              style={[
                {
                  height: HEIGHT * 0.4,
                  marginTop: HEIGHT * 0.6,
                  backgroundColor: 'white',
                  borderRadius: 20,
                  alignItems: 'center',
                  shadowColor: '#00000030',
                  shadowOffset: {width: 0, height: 2},
                  shadowOpacity: 0.25,
                  shadowRadius: 4,
                  elevation: 5,
                },
              ]}>
              <View>
                <View style={{marginBottom: HEIGHT * 0.009}}>
                  <Pressable
                    onPress={() => {
                      setModalVisible2(!modalVisible2);
                      setModalVisible(!modalVisible);
                    }}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: HEIGHT * 0.05,
                    }}>
                    <Image source={arrow} />
                    <Text
                      style={{marginHorizontal: WIDTH * 0.09, fontSize: 16}}>
                      Bring a car to the current location
                    </Text>
                    <Image source={moadalLocation} />
                  </Pressable>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: colors.borderGrey,
                      marginHorizontal: WIDTH * 0,
                      marginRight: WIDTH * 0.09,
                      marginTop: HEIGHT * 0.01,
                    }}
                  />
                  <Pressable
                    onPress={() => navigation.navigate()}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: HEIGHT * 0.009,
                    }}>
                    <Image source={arrow} />
                    <Text
                      style={{marginHorizontal: WIDTH * 0.09, fontSize: 16}}>
                      remove a unique number
                    </Text>
                    <Image source={moadalLocation} />
                  </Pressable>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: colors.borderGrey,
                      marginHorizontal: WIDTH * 0,
                      marginRight: WIDTH * 0.09,
                      marginTop: HEIGHT * 0.01,
                    }}
                  />
                  <Pressable
                    onPress={() => navigation.navigate()}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: HEIGHT * 0.01,
                    }}>
                    <Image source={arrow} />
                    <Text
                      style={{marginHorizontal: WIDTH * 0.09, fontSize: 16}}>
                      add a unique number
                    </Text>
                    <Image source={moadalLocation} />
                  </Pressable>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: colors.borderGrey,
                      marginHorizontal: WIDTH * 0,
                      marginRight: WIDTH * 0.09,
                      marginTop: HEIGHT * 0.01,
                    }}
                  />
                  <Pressable
                    onPress={() => navigation.navigate()}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: HEIGHT * 0.009,
                    }}>
                    <Image source={arrow} />
                    <Text
                      style={{marginHorizontal: WIDTH * 0.09, fontSize: 16}}>
                      add a regular number,
                    </Text>
                    <Image source={moadalLocation} />
                  </Pressable>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: colors.borderGrey,
                      marginHorizontal: WIDTH * 0,
                      marginRight: WIDTH * 0.09,
                      marginTop: HEIGHT * 0.01,
                    }}
                  />
                  <Pressable
                    onPress={() => navigation.navigate()}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: HEIGHT * 0.009,
                    }}>
                    <Image source={arrow} />
                    <Text
                      style={{marginHorizontal: WIDTH * 0.09, fontSize: 16}}>
                      Open order,
                    </Text>
                    <Image source={moadalLocation} />
                  </Pressable>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: colors.borderGrey,
                      marginHorizontal: WIDTH * 0,
                      marginRight: WIDTH * 0.09,
                      marginTop: HEIGHT * 0.01,
                    }}
                  />
                </View>
              </View>
            </View>
          </Pressable>
        </Modal>

        <Modal animationType="slide" transparent={true} visible={modalVisible2}>
          <Pressable onPress={() => setModalVisible2(!modalVisible2)} style={{}}>
            <View
              style={[
                {
                  height: HEIGHT * 0.4,
                  marginTop: HEIGHT * 0.6,
                  backgroundColor: 'white',
                  borderRadius: 20,
                  alignItems: 'center',
                  shadowColor: '#00000030',
                  shadowOffset: {width: 0, height: 2},
                  shadowOpacity: 0.25,
                  shadowRadius: 4,
                  elevation: 5,
                },
              ]}>
              <View>
                <View style={{marginBottom: HEIGHT * 0.009}}>
                  <Pressable
                    onPress={() => {
                      setModalVisible2(!modalVisible2)
                    //   setModalVisible(!modalVisible)
                    }}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: HEIGHT * 0.05,
                    }}>
                    <Image source={arrow} />
                    <Text
                      style={{marginHorizontal: WIDTH * 0.09, fontSize: 16}}>
                      Bring a car to the current location
                    </Text>
                    <Image source={moadalLocation} />
                  </Pressable>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: colors.borderGrey,
                      marginHorizontal: WIDTH * 0,
                      marginRight: WIDTH * 0.09,
                      marginTop: HEIGHT * 0.01,
                    }}
                  />
                  <Pressable
                    onPress={() => navigation.navigate()}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: HEIGHT * 0.009,
                    }}>
                    <Image source={arrow} />
                    <Text
                      style={{marginHorizontal: WIDTH * 0.09, fontSize: 16}}>
                      remove a unique number
                    </Text>
                    <Image source={moadalLocation} />
                  </Pressable>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: colors.borderGrey,
                      marginHorizontal: WIDTH * 0,
                      marginRight: WIDTH * 0.09,
                      marginTop: HEIGHT * 0.01,
                    }}
                  />
                  <Pressable
                    onPress={() => navigation.navigate()}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: HEIGHT * 0.01,
                    }}>
                    <Image source={arrow} />
                    <Text
                      style={{marginHorizontal: WIDTH * 0.09, fontSize: 16}}>
                      add a unique number
                    </Text>
                    <Image source={moadalLocation} />
                  </Pressable>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: colors.borderGrey,
                      marginHorizontal: WIDTH * 0,
                      marginRight: WIDTH * 0.09,
                      marginTop: HEIGHT * 0.01,
                    }}
                  />
                  <Pressable
                    onPress={() => navigation.navigate()}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: HEIGHT * 0.009,
                    }}>
                    <Image source={arrow} />
                    <Text
                      style={{marginHorizontal: WIDTH * 0.09, fontSize: 16}}>
                      add a regular number,
                    </Text>
                    <Image source={moadalLocation} />
                  </Pressable>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: colors.borderGrey,
                      marginHorizontal: WIDTH * 0,
                      marginRight: WIDTH * 0.09,
                      marginTop: HEIGHT * 0.01,
                    }}
                  />
                  <Pressable
                   onPress={() => setModalVisible3(!modalVisible3)}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: HEIGHT * 0.009,
                    }}>
                    <Image source={arrow} />
                    <Text
                      style={{marginHorizontal: WIDTH * 0.09, fontSize: 16}}>
                      Open order,
                    </Text>
                    <Image source={moadalLocation} />
                  </Pressable>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: colors.borderGrey,
                      marginHorizontal: WIDTH * 0,
                      marginRight: WIDTH * 0.09,
                      marginTop: HEIGHT * 0.01,
                    }}
                  />
                </View>
              </View>
            </View>
          </Pressable>
        </Modal>
        <ButtonComponent
          navigation={() => setModalVisible(true)}
          style={{marginTop: HEIGHT * 0 - 11, height: HEIGHT * 0.08}}
          title="create an order"
        />
      </MainContainer>
    </View>
  );
};

export default CarsListScreen;
