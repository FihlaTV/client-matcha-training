import { ADD_FLASH_MESSAGE, REMOVE_FLASH_MESSAGE } from '../../constants';

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_FLASH_MESSAGE:
      return action.payload;
    case REMOVE_FLASH_MESSAGE:
      return {};
    default:
      return state;
  }
};
