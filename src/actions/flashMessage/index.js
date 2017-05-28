import { ADD_FLASH_MESSAGE, REMOVE_FLASH_MESSAGE } from '../types';

export const create = message => ({
  type: ADD_FLASH_MESSAGE,
  payload: {
    ...message,
  },
});

export const remove = () => ({
  type: REMOVE_FLASH_MESSAGE,
  payload: {},
});
