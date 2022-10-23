import React, { useEffect, useState } from "react";
import { Restaurant } from "../model/restaurant";
import yelp from "./../api/yelp";

export const useResults = (): [
  (term?: string) => Promise<void>,
  Restaurant[],
  boolean,
  Error | null
] => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [results, setResults] = useState<Restaurant[]>([]);

  const searchApi = async (searchTerm?: string) => {
    setLoading(true);
    try {
      const resp = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "berlin",
        },
      });
      setResults(resp.data.businesses);
    } catch (error) {
      setError(error as Error);
    }
    setLoading(false);
  };

  useEffect(() => {
    searchApi("burger");
  }, []);

  return [searchApi, results, loading, error];
};

export const useResult = (
  id?: string
): [Restaurant | null, boolean, Error | null] => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [result, setResult] = useState<Restaurant | null>(null);

  const searchApi = async (id?: string) => {
    setLoading(true);
    try {
      const resp = await yelp.get(`/${id}`);
      setResult(resp.data);
    } catch (error) {
      setError(error as Error);
    }
    setLoading(false);
  };

  useEffect(() => {
    searchApi(id);
  }, []);

  return [result, loading, error];
};
