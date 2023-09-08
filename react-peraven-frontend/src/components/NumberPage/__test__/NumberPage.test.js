import React from "react";
import { render, screen } from "@testing-library/react";

import NumberPage from "../NumberPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders number page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <NumberPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("number-datatable")).toBeInTheDocument();
    expect(screen.getByRole("number-add-button")).toBeInTheDocument();
});
