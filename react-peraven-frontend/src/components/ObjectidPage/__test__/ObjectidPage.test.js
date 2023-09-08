import React from "react";
import { render, screen } from "@testing-library/react";

import ObjectidPage from "../ObjectidPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders objectid page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ObjectidPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("objectid-datatable")).toBeInTheDocument();
    expect(screen.getByRole("objectid-add-button")).toBeInTheDocument();
});
