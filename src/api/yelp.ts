import axios from "axios";

const API_KEY =
  "TvCSd6TM54-UP2mQ--DqkUNC6_CdmwTvosGNGWMvSVL3tYjrKRNgLJQPF5aDluHFnTq5d25gcusliaCl6_hF2jzWzz9POdorfKJ5s96tVRGCC41T1d-52rFynh79YnYx";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses/",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});
