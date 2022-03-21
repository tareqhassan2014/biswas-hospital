import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface signUpRequest {
    name: string;
    phone: string;
    email: string;
    img: string;
}

interface signUpResponse {
    token: string;
    data: IUser;
}

const baseUrl = 'https://biswas-hospital.herokuapp.com/api/v1';

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        login: builder.mutation<signUpResponse, string>({
            query: (credentials) => ({
                url: '/auth/login',
                method: 'POST',
                body: credentials,
            }),
        }),
        signUp: builder.mutation<signUpResponse, signUpRequest>({
            query: (credentials) => ({
                url: '/auth/signup',
                method: 'POST',
                body: credentials,
            }),
        }),
    }),
});

export const { useLoginMutation, useSignUpMutation } = api;
