import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Ishat',
  email: 'ishat@gmail.com',
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export default userSlice.reducer;
