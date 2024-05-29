import axios from 'axios'
import React from 'react'

export const getLiveGames = async() => {
    const options = {
    method: 'GET',
    url: 'https://api-nba-v1.p.rapidapi.com/games',
    params: {live: 'all'},
    headers: {
        'X-RapidAPI-Key': '2caa27425emshbde360862e6d3f3p1cb082jsn6e526e2b79ca',
        'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

export const getSeasonGames = async() => {
    const options = {
    method: 'GET',
    url: 'https://api-nba-v1.p.rapidapi.com/games',
    params: {season: '2023'},
    headers: {
        'X-RapidAPI-Key': '2caa27425emshbde360862e6d3f3p1cb082jsn6e526e2b79ca',
        'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}
