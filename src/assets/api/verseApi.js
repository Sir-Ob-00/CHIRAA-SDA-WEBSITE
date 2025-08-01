import axios from 'axios';

const API_URL = 'https://labs.bible.org/api/?passage=votd&type=json'; // Example public API

export const fetchVerseOfTheDay = async () => {
    try {
        const response = await axios.get(API_URL);
        // The API returns an array of verse objects
        if (response.data && response.data.length > 0) {
        const verse = response.data[0];
        return {
            text: verse.text,
            reference: `${verse.bookname} ${verse.chapter}:${verse.verse}`
        };
        }
        return {
        text: "Verse not available.",
        reference: ""
        };
    } catch (error) {
        console.error('Error fetching the verse of the day:', error);
        return {
        text: "Unable to fetch verse.",
        reference: ""
        };
    }
};