import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
export default function useRedux() {
  const dispatch = useDispatch();
  const getState = reducer => {
    return useSelector(state => state.reducer);
  };
  return {
    dispatch,
    getState,
  };
}
