import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface signUpRequest {
    name: string;
    phone: string;
    email: string;
    img: string;
}
interface LoginRequest {
    email: string;
    password: string;
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

interface IAppointment {
    date: string;
    email: string;
    name: string;
    phone: string;
    status: string;
    time: string;
    updatedAt: string;
    user: string;
    _id: string;
}

interface getAppointmentResponse {
    data: IAppointment[];
}

const baseUrl = 'https://biswas-hospital.herokuapp.com/api/v1';

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl }),
    tagTypes: ['appointment'],
    endpoints: (builder) => ({
        login: builder.mutation<signUpResponse, LoginRequest>({
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

        getAppointmentByEmail: builder.query<getAppointmentResponse, string>({
            query: (query) => ({
                url: `/appointment${query}`,
                method: 'GET',
            }),
            providesTags: ['appointment'],
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
            invalidatesTags: ['appointment'],
        }),
    }),
});

export const {
    useLoginMutation,
    useSignUpMutation,
    useCreateAppointmentMutation,
    useGetAppointmentByEmailQuery,
} = api;
