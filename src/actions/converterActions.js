import * as actions from './actionTypes';

export const converterAction = convert => ({
  type: actions.CLICK_UPDATE_VALUE,
  name: convert.name,
  website: convert.website,
  password: convert.password,
  category: convert.category
});
