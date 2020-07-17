import { Dispatch } from "redux";
import { AppActions } from "../../types/actions";

const volumeChanged = (volume: number): AppActions => ({
    type: 'CHANGE_VOLUME',
    volume
})

export const changeVolume = (volume: number) => (dispatch: Dispatch<AppActions>) => {
    dispatch(volumeChanged(volume))
}