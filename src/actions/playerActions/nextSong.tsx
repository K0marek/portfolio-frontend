import { Dispatch } from "react";
import { AppActions } from "../../types/actions";

const next = (nextId: number): AppActions => ({
    type: 'NEXT_SONG',
    id: nextId
})

export const nextSong = (nextId: number) => (dispatch: Dispatch<AppActions>) => {
    dispatch(next(nextId))
}