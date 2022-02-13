import { appClient } from "./api";

export const getCategores = () => appClient.get('/api_category.php');

export const getQuestions = (categoriID) => appClient.get(`/api.php?amount=3&category=${categoriID}`);
