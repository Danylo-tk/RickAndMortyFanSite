import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

const baseUrl = "https://rickandmortyapi.com";
const characterResourceUrl = new URL("/api/character", baseUrl);

/* type Data = {
  id: number;
  name: string;
  status: string;
  image: string;
  location: { name: string };
}; */

type Data = {
  info: {};
  results: Array<
    [
      {
        id: number;
        name: string;
        characterStatus: string;
        image: string;
        location: { name: string };
      }
    ]
  >;
};

interface CharacterState {
  data: any;
  searchVal: string;
  url: string;
  status?: Status;
  gender?: Gender;
}

const initialState: CharacterState = {
  data: {},
  searchVal: "",
  url: baseUrl,
};

type Status = "Alive" | "Dead" | "Unknown";
type Gender = "Female" | "Male" | "Genderless" | "Unknown";

interface CharacterSearchParams {
  name: string;
  page: number;
  status?: Status;
  gender?: Gender;
}

export const fetchData = createAsyncThunk<Data, CharacterSearchParams>(
  "list/fetchData",
  async function ({ name, page, status = "", gender = "" }) {
    const queryUrl = new URL(characterResourceUrl);
    const searchParams = new URLSearchParams({
      name,
      page: page.toString(),
      status,
      gender,
    });
    queryUrl.search = searchParams.toString();
    const res = await axios.get(queryUrl.href);
    const data = await res.data;

    return data;
  }
);

const cardListSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    handleSearchChange(state, action: PayloadAction<string>) {
      state.searchVal = action.payload;
    },
    setStatus(state, action: PayloadAction<Status>) {
      state.status = action.payload;
    },
    setGender(state, action: PayloadAction<Gender>) {
      state.gender = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const { handleSearchChange, setStatus, setGender } =
  cardListSlice.actions;
export default cardListSlice.reducer;
