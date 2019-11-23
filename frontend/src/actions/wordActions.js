import * as types from './actionTypes';
export function searchWord(wordItem) {
    return {type : types.SEARCH_WORD,wordItem}; // writing it instead of courses:courses
}