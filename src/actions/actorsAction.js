import {
    FETCH_ACTOR
} from '../actions/types';
import data from '../data.json';

const ds = data
export const fetchActor = (name) => {
    const new_ds = ds.filter((item) => (item.actor.map((actorItem) => (actorItem.name)).includes(name)))
    return {
        type: FETCH_ACTOR,
        payload: new_ds
    }
}