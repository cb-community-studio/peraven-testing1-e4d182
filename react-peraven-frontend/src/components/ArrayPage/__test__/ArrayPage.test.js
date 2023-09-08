import React from "react";
import { render, screen } from "@testing-library/react";

import ArrayPage from "../ArrayPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders array page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ArrayPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("array-datatable")).toBeInTheDocument();
    expect(screen.getByRole("array-add-button")).toBeInTheDocument();
});
