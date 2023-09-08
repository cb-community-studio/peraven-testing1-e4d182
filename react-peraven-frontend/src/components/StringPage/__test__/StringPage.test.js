import React from "react";
import { render, screen } from "@testing-library/react";

import StringPage from "../StringPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders string page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <StringPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("string-datatable")).toBeInTheDocument();
    expect(screen.getByRole("string-add-button")).toBeInTheDocument();
});
