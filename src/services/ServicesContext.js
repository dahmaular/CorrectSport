import React, {createContext, useState} from 'react';
import axios from 'axios';
import {GET_SERVICE} from '../shared/Backend';

export const ServicesContext = createContext();

export const ServicesContextProvider = ({children}) => {
  const [leagues, setLeagues] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [todaysMatch, setTodaysMatch] = useState([]);
  const [liveMatches, setLiveMatches] = useState([]);
  const [matchDetails, setMatchDetails] = useState(null);
  const [newsList, setNewsList] = useState([]);
  const [newsDetails, setNewsDetails] = useState(null);

  const fetchLeague = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await GET_SERVICE('/leagues');
      // console.log(res)
      if (res.status === 200) {
        const [Cnm] = res.data;
        console.log('Event Response', res.data);
        // setLeagues(res.data.data);
        // setIsLoading(false);
      } else {
        setError(res.data.message);
      }
    } catch (error) {
      //   setError(error.response.data.message);
      console.log(error);
    }
  };

  const fetchLiveMatch = async () => {
    setIsLoading(true);
    setError(null);
    setLiveMatches([]);

    try {
      const res = await GET_SERVICE('/matches');
      //   console.log(res.status)
      if (res.status === 200) {
        // console.log('Event Response', res.data);
        setLiveMatches(res.data);
        setIsLoading(false);
      } else {
        setError(res.data.message);
      }
    } catch (error) {
      //   setError(error.response.data.message);
      console.log(error);
    }
  };

  const fetchMatchByDate = async date => {
    setTodaysMatch([]);
    setIsLoading(true);
    setError(null);

    try {
      const res = await GET_SERVICE(`/matches/${date}`);
      // console.log(res)
      if (res.status === 200) {
        // console.log('Event Response', res.data);
        setTodaysMatch(res.data);
        setIsLoading(false);
      } else {
        setError(res.data.message);
      }
    } catch (error) {
      //   setError(error.response.data.message);
      console.log(error);
    }
  };

  const fetchMatchDetails = async eid => {
    setMatchDetails([]);
    setIsLoading(true);
    setError(null);

    try {
      const res = await GET_SERVICE(`/match-details/${eid}`);
      // console.log(res)
      if (res.status === 200) {
        // console.log('Event Response', res.data);
        setMatchDetails(res.data);
        setIsLoading(false);
      } else {
        setError(res.data.message);
      }
    } catch (error) {
      //   setError(error.response.data.message);
      console.log(error);
    }
  };

  const fetchNewsList = async () => {
    setNewsList([]);
    setIsLoading(true);
    setError(null);
    try {
      const res = await GET_SERVICE(`/news`);
      // console.log(res.data)
      if (res.status === 200) {
        setNewsList(res.data);
        setIsLoading(false);
      } else {
        setError(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchNewsDetails = async id => {
    setNewsDetails([]);
    setIsLoading(true);
    setError(null);

    try {
      const res = await GET_SERVICE(`/news/${id}`);
      // console.log(res)
      if (res.status === 200) {
        // console.log('Event Response', res.data);
        setNewsDetails(res.data);
        setIsLoading(false);
      } else {
        setError(res.data.message);
      }
    } catch (error) {
      //   setError(error.response.data.message);
      console.log(error);
    }
  };

  return (
    <ServicesContext.Provider
      value={{
        fetchLeague,
        leagues,
        isLoading,
        fetchLiveMatch,
        liveMatches,
        fetchMatchByDate,
        todaysMatch,
        fetchMatchDetails,
        matchDetails,
        newsList,
        fetchNewsList,
        fetchNewsDetails,
        newsDetails
      }}>
      {children}
    </ServicesContext.Provider>
  );
};
