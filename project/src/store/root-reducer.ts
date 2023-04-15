import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import { moviesData } from './movies-data/movies-data';
import {userProcess} from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.Movies]: moviesData.reducer,
  [NameSpace.User]: userProcess.reducer,
});
