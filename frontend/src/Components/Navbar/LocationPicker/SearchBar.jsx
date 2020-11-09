import { makeStyles, Typography } from "@material-ui/core";
import React, { useState, useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { setLocation } from "../../../Redux/auth/actions";
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
    left: "36px",
    display: "none",
  },
  suggestions: {
    position: "absolute",
    top: "1.77rem",
    background: "#fff",
    // overflow: 'visible',
    width: "383px",
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

const SearchBar = ({ handleClose }) => {
  const classes = useStyles();
  const [showList, setShowList] = useState(false);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const [suggestions, setSuggestions] = useState([]);

  const getSuggestions = async (input) => {
    const { data } = await api.get(`/cities?query=${input}&limit=5`);
    setSuggestions(data.docs);
  };

  const search = useMemo(() => debounce(getSuggestions, 500), []);

  useEffect(() => {
    search(input);
  }, [input, search]);

  const handleSetLocation = (item) => {
    dispatch(setLocation(item));
    handleClose();
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
            onChange={(e) => setInput(e.target.value)}
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
              <div key={item._id} onClick={() => handleSetLocation(item)}>
                {item.name}
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
