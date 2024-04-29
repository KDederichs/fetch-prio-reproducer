import {render} from "@testing-library/react";
import Home from "./page";

describe('Tests', () => {
    it('it renders without warning', async () => {
        const {container} = render(
            <Home/>
        )
    })
})
