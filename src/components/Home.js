import React, { useState, useEffect } from "react";
import Countries from "./Countries";
import {
  Stack,
  InputBase,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Paper,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

const allUrl = "https://restcountries.com/v3.1/all";
const regionUrl = "https://restcountries.com/v3.1/region/";

// Theme Styling

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  boxShadow: theme.shadows[2],
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  height: "50px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(0),
    width: "40%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2, 0, 3),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(2, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(6)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      width: "50ch",
    },
  },
}));

const Home = ({}) => {
  // Data initializations

  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [region, setRegion] = useState("");
  const [search, setSearch] = useState("");

  // Methods & functions
  const fetchCountriesData = async () => {
    try {
      const res = await fetch(allUrl);
      if (res.ok) {
        const data = await res.json();

        setCountries(data);
        console.log(countries);
      }
    } catch (error) {
      alert("Error Encountered");
    }
  };

  const fetchRegionData = async (regionName) => {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/region/${regionName}`
      );
      if (res.ok) {
        const data = await res.json();
        setCountries(data);
      }
    } catch (error) {
      alert("error while fetching region");
    }
    if (regionName === "all") {
      try {
        const res = await fetch(allUrl);
        if (res.ok) {
          const info = await res.json();
          setCountries(info);
        }
      } catch (error) {
        alert("error while fetching all region");
      }
    }
  };

  const fetchNameData = async (countryName) => {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}`
      );
      if (res.ok) {
        const data = await res.json();
        setCountries(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setRegion(e.target.value);
    const init = async () => {
      await fetchRegionData(e.target.value);
    };
    init();
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    fetchNameData(e.target.value);
  };

  // Effects
  useEffect(() => {
    fetchCountriesData();
    setLoading(false);
  }, []);

  return (
    <Paper sx={{ height: "90vh" }} square elevation={0}>
      <Stack
        sx={{ pt: 4, mb: 6, pr: 6, pl: 6 }}
        direction={{ xs: "column", sm: "row" }}
        spacing={6}
        justifyContent="space-between"
      >
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search for a country…"
            inputProps={{ "aria-label": "search" }}
            value={search}
            onChange={handleSearch}
          />
        </Search>
        <FormControl sx={{ width: "200px", height: "50px", border: "none" }}>
          <Paper sx={{ height: "100%" }}>
            <InputLabel id="demo-simple-select-label">
              Filter by Region
            </InputLabel>
          </Paper>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={region}
            label="Filter by Region"
            // onChange={(e) => setRegion(e.target.value)}
            onChange={handleChange}
          >
            <MenuItem value={"all"}>All</MenuItem>
            <MenuItem value={"africa"}>Africa</MenuItem>
            <MenuItem value={"america"}>America</MenuItem>
            <MenuItem value={"asia"}>Asia</MenuItem>
            <MenuItem value={"europe"}>Europe</MenuItem>
            <MenuItem value={"oceania"}>Oceania</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      <Countries countries={countries} loading={loading} />
    </Paper>
  );
};

export default Home;