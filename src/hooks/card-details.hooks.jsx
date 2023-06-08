import { useContext } from 'react';
import {
  CardDetailsContext,
  CardDetailsDispatchContext,
} from '../state/CardDetailsContext';

export function useCardDetails() {
  return useContext(CardDetailsContext);
}

export function useCardDetailsDispatch() {
  return useContext(CardDetailsDispatchContext);
}
