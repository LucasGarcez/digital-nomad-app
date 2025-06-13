import { fireEvent, screen } from "expo-router/testing-library";

import { renderApp } from "../test-utils/renderApp";

describe("integration: Home", () => {
  test("successfully", async () => {
    renderApp({ isSignedIn: true });
    const element = await screen.findByText(/Rio de Janeiro/i);
    fireEvent.press(element);

    // multiple texts as Brasil
    const detailElement = await screen.findAllByText(/Brasil/i);
    expect(detailElement).toBeTruthy();
  });

  test("error on fetch cities", async () => {
    renderApp({
      isSignedIn: true,
      repositories: {
        city: {
          findAll: async () => {
            return Promise.reject("servidor caiu :(");
          },
        },
      },
    });

    expect(await screen.findByText(/servidor caiu/i)).toBeTruthy();
  });
});
