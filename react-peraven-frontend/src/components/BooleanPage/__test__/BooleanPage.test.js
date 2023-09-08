import React from "react";
import { render, screen } from "@testing-library/react";

import BooleanPage from "../BooleanPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders boolean page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <BooleanPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("boolean-datatable")).toBeInTheDocument();
    expect(screen.getByRole("boolean-add-button")).toBeInTheDocument();
});
