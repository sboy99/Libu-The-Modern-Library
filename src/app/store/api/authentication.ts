import type {
  TLoginPayload,
  TRegisterPayload,
} from '@/app/types/authentication';
import axios from '@/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { Actions } from '../features';
import type { IApiResponse } from '../interfaces/StoreInterface';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (values: TRegisterPayload, { dispatch }) => {
    dispatch(Actions.startFormLoading());
    try {
      const { data } = await axios.post('/auth/register', values);
      dispatch(Actions.setApiResponse(data));
      return data as IApiResponse;
    } catch (error) {
      if (error instanceof AxiosError) {
        dispatch(Actions.setApiResponse(error.response?.data));
        throw error.response?.data;
      }
    } finally {
      dispatch(Actions.stopFormLoading());
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (values: TLoginPayload, { dispatch }) => {
    dispatch(Actions.startFormLoading());
    try {
      const { data } = await axios.post('/auth/login', values);
      dispatch(Actions.setApiResponse(data));
      return data as IApiResponse;
    } catch (error) {
      if (error instanceof AxiosError) {
        dispatch(Actions.setApiResponse(error.response?.data));
        throw error.response?.data;
      }
    } finally {
      dispatch(Actions.stopFormLoading());
    }
  }
);
