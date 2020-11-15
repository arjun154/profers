import { makeStyles, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useState, useEffect, useMemo } from "react";
import api from "../../../utils/api";
import { debounce } from "../../../utils/debounce";

const useStyles = makeStyles((theme) => ({
  root: {
    border: "1px solid #ccc",
    position: "relative",
    borderRadius: "3px",
    display: "flex",
    alignItems: "center",

    "& img": {
      width: "15px",
      filter: "opacity(60%)",
    },

    "&>div": {
      padding: "0.5rem 0.8rem",
      display: "flex",
      alignItems: "center",
    },
  },
  inputContainer: {
    flex: 4,
    "& > input": {
      border: 0,
      fontSize: "12px",
      marginLeft: "10px",
      height: "100%",
      width: "100%",
      color: "#444",

      "&:focus": {
        outline: "none",
      },
      "&::placeholder": {
        color: "#c9c9c9",
      },
    },
  },
  detectContainer: {
    flex: 1,
    cursor: "pointer",
    borderLeft: "1px solid #ccc",
    paddingLeft: "0.4rem",

    "& img": {
      marginRight: "0.4rem",
    },

    "& h6": {
      fontSize: "14px",
      color: "#444",
    },
  },
  suggestionsPosition: {
    position: "fixed",
  },
  suggestions: {
    position: "absolute",
    top: "1.77rem",
    background: "#fff",
    width: "383px",
    marginLeft: "30%",
    textAlign: "left",
    display: "none",
    border: "1px solid #ddd",

    "&  div": {
      listStyle: "none",
      fontSize: "14px",
      padding: "0.4rem 1rem",
      cursor: "pointer",

      "&:hover": {
        backgroundColor: "#B3E5FC",
      },
    },
  },
}));

const listStyles = {
  display: "block",
};

const SearchBar = ({ handleClose, onChange }) => {
  const classes = useStyles();
  const [showList, setShowList] = useState(false);
  const [input, setInput] = useState("");

  const [suggestions, setSuggestions] = useState([]);

  const getSuggestions = async (input) => {
    const { data } = await api.get(`/cities?query=${input}&limit=5`);
    setSuggestions(data.docs);
  };

  const search = useMemo(() => debounce(getSuggestions, 20000), []);

  useEffect(() => {
    search(input);
  }, [input, search]);

  const handleSetLocation = (item) => {
    setInput(item.place_name);
    onChange && onChange(item.place_name, item.geometry);
  };
  const handleInputChange = (value) => {
    setInput(value);
    axios({
      method: "get",
      url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${value}.json`,
      params: {
        bbox:
          "68.0753944015233,6.65718310150864,97.3950629309158,35.6732489160381",
        // types: "locality",
        access_token:
          "pk.eyJ1IjoiZ291dGhhbWlreWF0aGFtNCIsImEiOiJja2hib2Q5b2YwMDNxMnJ0Z2U2dXg4NmQ2In0.MOg_NknLp-nyS-ahwM85mw",
      },
    })
      .then((res) => {
        setSuggestions(res.data.features);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className={classes.root}>
        <div className={classes.inputContainer}>
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/622/622669.svg"
            alt="search icon.png"
          />
          <input
            onFocus={(e) => {
              setShowList(true);
            }}
            onBlur={(e) => setTimeout(() => setShowList(false), 500)}
            value={input}
            onChange={(e) => handleInputChange(e.target.value)}
            type="text"
            autoComplete="new-password"
            placeholder="Type your city (e.g Chennai, Pune)"
          />
        </div>
        <div className={classes.detectContainer}>
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/860/860813.svg"
            alt="location.png"
          />
          <Typography component="h6">Detect </Typography>
        </div>
        <div className={classes.suggestionsPosition}>
          <ul
            style={showList ? listStyles : {}}
            className={classes.suggestions}
          >
            {suggestions.map((item) => (
              <div key={item.id} onMouseDown={() => handleSetLocation(item)}>
                {item.place_name}
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
