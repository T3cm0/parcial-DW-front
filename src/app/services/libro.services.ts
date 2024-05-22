
import axios from "axios";
import { headersRQ, resolveResponse } from "./client";
import { Libro } from "../models/libro.model";

export const postLibros = (body: Libro) => {
    try {
        return resolveResponse(axios.post(`http://127.0.0.1:8080libro/post`, body, headersRQ()));
    } catch (error) {
        console.log(error);
        return Promise.reject("Hubo un problema por favor comunicar");
    };
}

export const getLibros = () => {
    try {
        return resolveResponse(axios.get(`http://127.0.0.1:8080/libro/get`, headersRQ()));
    } catch (error) {
        console.log(error);
        return Promise.reject("Hubo un problema por favor comunicar");
    };
}

