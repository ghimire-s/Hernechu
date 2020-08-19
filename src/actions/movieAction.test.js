import * as actions from './movieAction';
import * as types from './types';
import data from '../data.json';
import expect from 'expect';



describe('Fetching movie actions', () => {
    const ds = data;
    const new_match = [{
        "name": "Loot",
        "image": "https://image.tmdb.org/t/p/w220_and_h330_face/d9pQHVVf2FbfY6ayPM7qseVLc5K.jpg",
        "year": "2012",
        "length": "2h 1m",
        "genre": [
            "action",
            "comedy"
        ],
        "rating": "PG-13",
        "actor": [
            {
                "name": "Reecha Sharma",
                "image": "https://image.tmdb.org/t/p/original/1f8Y1jAxZdWPPEbfmlrK48iIqFl.jpg"
            },
            {
                "name": "Keki Adhikari",
                "image": "https://image.tmdb.org/t/p/original/f0ZvIc6njIgBAqlfinM9obQCYow.jpg"
            },
            {
                "name": "Bipin Karki",
                "image": "https://image.tmdb.org/t/p/original/f0ZvIc6njIgBAqlfinM9obQCYow.jpg"
            },
            {
                "name": "Saugat Malla",
                "image": "https://image.tmdb.org/t/p/original/pbIOAtHytaDkd0nQGG9OPb5jUHN.jpg"
            },
            {
                "name": "Dayahang Rai",
                "image": "https://image.tmdb.org/t/p/original/ySK3NIzPYA4aYsGhPd17me29TsJ.jpg"
            },
            {
                "name": "Saugat Malla",
                "image": "https://image.tmdb.org/t/p/original/pbIOAtHytaDkd0nQGG9OPb5jUHN.jpg"
            },
            {
                "name": "Dayahang Rai",
                "image": "https://image.tmdb.org/t/p/original/ySK3NIzPYA4aYsGhPd17me29TsJ.jpg"
            }
        ],
        "streaming": [
            "https://is3-ssl.mzstatic.com/image/thumb/Purple114/v4/48/27/ad/4827ad2f-084b-2760-3d6d-5b26238decc0/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png",
            "https://is4-ssl.mzstatic.com/image/thumb/Purple114/v4/76/db/17/76db17fa-9ec6-86c4-4fc6-ec87bd7b01f0/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png"
        ],
        "songs": [
            "Dui Rupaiyaa",
            "Kutu Ma Kutu",
            "Talkyo Jawani"
        ]
    }]
    it('fetchMovies should fetch all movie', () => {
        const expectedAction = {
            type: types.FETCH_MOVIES,
            payload: ds
        }
        expect(actions.fetchMovies()).toEqual(expectedAction)

    });
    it('fetchMovie should fetch a single movie', () => {
        const expectedAction = {
            type: types.FETCH_MOVIE,
            payload: new_match
        }
        expect(actions.fetchMovie('Loot')).toEqual(expectedAction)
    })
})
