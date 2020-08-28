import * as actions from './actorsAction';
import * as types from './types';
import data from '../data.json';
import expect from 'expect';

describe('Fetching actor movies', () => {
    const ds = data;
    const new_match = [{
        "name": "Talakjung vs Tulke",
        "image": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/1SFTXzxtNskQphXebQJQeeswLeg.jpg",
        "year": "2014",
        "length": "1h 30m",
        "youtube": "https://www.youtube.com/watch?v=Zl-JXV0JTzw&t=23s",
        "genre": [
            "drama"
        ],
        "rating": "PG-13",
        "actor": [
            {
                "name": "Prakash Ghimire",
                "image": ""
            },
            {
                "name": "Reecha Sharma",
                "image": "https://image.tmdb.org/t/p/original/1f8Y1jAxZdWPPEbfmlrK48iIqFl.jpg"
            },
            {
                "name": "Rabindra Singh Baniya",
                "image": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/6mCNFvFRBJkSLzVOlrtYLFfhKAW.jpg"
            },
            {
                "name": "Shushank Mainali",
                "image": ""
            },
            {
                "name": "Buddhi Tamang",
                "image": ""
            },
            {
                "name": "Dayahang Rai",
                "image": "https://image.tmdb.org/t/p/original/ySK3NIzPYA4aYsGhPd17me29TsJ.jpg"
            }
        ],
        "streaming": [
            {
                "youtube": "https://cdn2.iconfinder.com/data/icons/social-icons-color/512/youtube-512.png"
            }
        ],
        "songs": [
            "Dui Rupaiyaa",
            "Kutu Ma Kutu",
            "Talkyo Jawani"
        ]
    },
    {
        "name": "Sunkesari",
        "image": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/roOpVRDNorjxJTdBTuDBMtI6WVk.jpg",
        "year": "2012",
        "length": "2h 1m",
        "youtube": "https://www.youtube.com/watch?v=Cz29r8qm07k",
        "genre": [
            "Horror"
        ],
        "rating": "PG-13",
        "actor": [
            {
                "name": "Reecha Sharma",
                "image": "https://image.tmdb.org/t/p/original/1f8Y1jAxZdWPPEbfmlrK48iIqFl.jpg"
            },
            {
                "name": "Lauren Lofberg",
                "image": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/4CLaQw06oyXApbhFFBwqiO5xHAP.jpg"
            },
            {
                "name": "Rabindra Jha",
                "image": ""
            },
            {
                "name": "Bhim Neupane",
                "image": ""
            },
            {
                "name": "Sunny Dhakal",
                "image": ""
            },
            {
                "name": "Amy Parajuli",
                "image": ""
            },
            {
                "name": "Prerana Thapa",
                "image": ""
            },
            {
                "name": "Tamanna Sharma",
                "image": ""
            }
        ],
        "streaming": [
            {
                "youtube": "https://cdn2.iconfinder.com/data/icons/social-icons-color/512/youtube-512.png"
            }
        ],
        "songs": [
            "Dui Rupaiyaa",
            "Kutu Ma Kutu",
            "Talkyo Jawani"
        ]
    },
    {
        "name": "Loot",
        "image": "https://image.tmdb.org/t/p/w220_and_h330_face/d9pQHVVf2FbfY6ayPM7qseVLc5K.jpg",
        "year": "2012",
        "length": "2h 1m",
        "youtube": "",
        "genre": [
            "action",
            "comedy",
            "fantasy"
        ],
        "rating": "PG-13",
        "actor": [
            {
                "name": "Reecha Sharma",
                "image": "https://image.tmdb.org/t/p/original/1f8Y1jAxZdWPPEbfmlrK48iIqFl.jpg"
            },
            {
                "name": "Karma Shakya",
                "image": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/19bUnoVIjzWpsGAzIfCvKudG7Tt.jpg"
            },
            {
                "name": "Prateek Raj Neupane",
                "image": ""
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
                "name": "Sushil Raj Pandey",
                "image": ""
            },
            {
                "name": "Praween Khatiwada",
                "image": ""
            },
            {
                "name": "Srijana Subba",
                "image": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/1C2Aba7PQA6Y2N7GXL032vooyvN.jpg"
            }
        ],
        "streaming": [
            {
                "prime": "https://is3-ssl.mzstatic.com/image/thumb/Purple114/v4/48/27/ad/4827ad2f-084b-2760-3d6d-5b26238decc0/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png"
            },
            {
                "netflix": "https://is4-ssl.mzstatic.com/image/thumb/Purple114/v4/76/db/17/76db17fa-9ec6-86c4-4fc6-ec87bd7b01f0/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png"
            }
        ],
        "songs": [
            "Dui Rupaiyaa",
            "Kutu Ma Kutu",
            "Talkyo Jawani"
        ]
    }]
    it('will fetch Reecha Sharma Movies', () => {
        const expectedAction = {
            type: types.FETCH_ACTOR,
            payload: new_match
        }
        expect(actions.fetchActor('Reecha Sharma')).toEqual(expectedAction)

    });

})