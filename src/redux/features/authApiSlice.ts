import { apiSlice } from "../services/apiSlice";

interface User {
  readonly id: number;
  username?: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  profile_picture?: string;
}

interface Social {
  provider: string;
  state: string;
  code: string;
}

interface createUserResponse {
  success: boolean;
  user: User;
}

const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    retrieveUser: builder.query<User, void>({
      query: () => "/auth/users/me/",
    }),
    socialAuthenticate: builder.mutation<Social, any>({
      query: ({ provider, state, code }) => ({
        url: `/auth/o/${provider}/?state=${encodeURIComponent(
          state,
        )}&code=${encodeURIComponent(code)}`,
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }),
    }),
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: "/auth/jwt/create/",
        method: "POST",
        body: { email, password },
      }),
    }),
    register: builder.mutation({
      query: ({
        first_name,
        last_name,
        email,
        phone_number,
        password,
        re_password,
      }) => ({
        url: "/auth/users/",
        method: "POST",
        body: {
          first_name,
          last_name,
          email,
          phone_number,
          password,
          re_password,
        },
      }),
    }),
    verify: builder.mutation({
      query: () => ({
        url: "/auth/jwt/verify/",
        method: "POST",
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout/",
        method: "POST",
      }),
    }),
    activation: builder.mutation({
      query: ({ uid, token }) => ({
        url: "/auth/users/activation/",
        method: "POST",
        body: { uid, token },
      }),
    }),
    resetPassword: builder.mutation({
      query: ({ email }) => ({
        url: "/auth/users/reset_password/",
        method: "POST",
        body: { email },
      }),
    }),
    resetPasswordConfirm: builder.mutation({
      query: ({ uid,token,new_password,re_new_password  }) => ({
        url: "/auth/users/reset_password_confirm/",
        method: "POST",
        body: { uid,token,new_password,re_new_password },
      }),
    }),
  }),
});

export const {
  useRetrieveUserQuery,
  useSocialAuthenticateMutation,
  useLoginMutation,
  useVerifyMutation,
  useLogoutMutation,
  useRegisterMutation,
  useActivationMutation,
  useResetPasswordMutation,
  useResetPasswordConfirmMutation,
} = authApiSlice;
