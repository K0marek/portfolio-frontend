import { Dispatch } from "react";
import { AppActions } from "../../types/actions";

const previous = (previousId: number): AppActions => ({
    type: 'PREVIOUS_SONG',
    id: previousId
})

export const previousSong = (previousId: number) => (dispatch: Dispatch<AppActions>) => {
    dispatch(previous(previousId))
}