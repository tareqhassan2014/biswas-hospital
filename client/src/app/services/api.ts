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

interface AppointmentRequest {
    name: string;
    email: string;
    time: string;
    phone: string;
    user: string;
    date: Date;
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

        getAppointmentByEmail: builder.mutation<signUpResponse[], string>({
            query: (email) => ({
                url: `/appointment/user/${email}`,
                method: 'GET',
            }),
        }),

        createAppointment: builder.mutation<
            AppointmentRequest,
            AppointmentRequest
        >({
            query: (body) => ({
                url: '/appointment',
                method: 'POST',
                body: body,
            }),
        }),
    }),
});

export const {
    useLoginMutation,
    useSignUpMutation,
    useCreateAppointmentMutation,
    useGetAppointmentByEmailMutation,
} = api;
