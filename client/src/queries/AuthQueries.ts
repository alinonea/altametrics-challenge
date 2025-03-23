import {useMutation, UseMutationResult } from '@tanstack/react-query';
import AuthService from '../services/AuthService';
import { UserLogin } from '../types';

export const useCreateProduct = (): UseMutationResult<{ access_token: string}, { message: string}, UserLogin> => {
  return useMutation({
    mutationFn: (user) => AuthService.login(user),
    meta: {
      successMessage: 'Successfully logged in',
      errorMessage: 'Failed to login',
    },
  });
};