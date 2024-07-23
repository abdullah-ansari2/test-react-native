import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';

import {styles} from './styles';
import {Container, Typography} from '../../atom-components';
import {InterestItem, PrimaryButton, SelectButton} from '../../components';
import {interestData, otherInterestData} from './data';

export default function HomeScreen({navigation}) {
  const [activeInterest, setActiveInterest] = useState([]);
  const [activeOtherInterest, setActiveOtherInterest] = useState([]);

  const handleInterest = id =>
    setActiveInterest(prevSelectedItems =>
      prevSelectedItems.includes(id)
        ? prevSelectedItems.filter(itemId => itemId !== id)
        : [...prevSelectedItems, id],
    );

  const handleOtherInterest = id =>
    setActiveOtherInterest(prevSelectedItems =>
      prevSelectedItems.includes(id)
        ? prevSelectedItems.filter(itemId => itemId !== id)
        : [...prevSelectedItems, id],
    );

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Container>
          <Typography
            size={27}
            semiBold
            mT={105}
            mB={24}
            color="white"
            LineHeight={38}>
            Craft Your Adventure{'\n'}Choose Your Interests
          </Typography>

          <View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.scrollView}
              contentContainerStyle={styles.contentContainer}>
              {interestData.map(item => (
                <SelectButton
                  key={item?.id}
                  item={item}
                  active={activeInterest.includes(item?.id)}
                  onSelect={handleInterest}
                />
              ))}
            </ScrollView>
          </View>

          <Typography size={20} semiBold mT={20} mB={16} color="white">
            Others interests
          </Typography>

          <View style={styles.otherInterestView}>
            {otherInterestData.map(item => (
              <InterestItem
                key={item?.id}
                item={item}
                onSelect={handleOtherInterest}
                active={activeOtherInterest.includes(item?.id)}
              />
            ))}
          </View>
        </Container>
      </ScrollView>
      <View style={styles.primaryBtnView}>
        <PrimaryButton
          title="Continue"
          style={styles.primaryBtn}
          disabled={
            !(
              Boolean(activeInterest.length) &&
              Boolean(activeOtherInterest.length)
            )
          }
          handlePress={() => navigation.navigate('ForgotPassword')}
        />
      </View>
    </>
  );
}
