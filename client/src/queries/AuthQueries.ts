import {useMutation, UseMutationResult } from '@tanstack/react-query';
import AuthService from '../services/AuthService';
import { LoginResponse, UserLogin } from '../types';
import { AxiosResponse } from 'axios';

export const doLogin = (): UseMutationResult<AxiosResponse< LoginResponse, any>, Error, UserLogin> => {
  return useMutation({
    mutationFn: (user: UserLogin) => AuthService.login(user),
    meta: {
      successMessage: 'Successfully logged in',
      errorMessage: 'Failed to login',
    },
  });
};