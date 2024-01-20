import { Page } from '../interfaces/page';

export interface Stageable {
    width: number,
    height: number,
    pages: Array<Page>,
    currentlyEditedPage?: string,
    currentlySelectedElement?: string
}