import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import SnackOrBoozeApi from "./Api";

// Mock the API calls
jest.mock("./Api");

test("fetches snacks and drinks from the API and renders them", async () => {
  // Define mock data for snacks and drinks
  const mockSnacks = [
    { id: "1", name: "Snack 1" },
    { id: "2", name: "Snack 2" },
  ];

  const mockDrinks = [
    { id: "1", name: "Drink 1" },
    { id: "2", name: "Drink 2" },
  ];

  // Mock the implementation of getSnacks and getDrinks
  SnackOrBoozeApi.getSnacks.mockResolvedValue(mockSnacks);
  SnackOrBoozeApi.getDrinks.mockResolvedValue(mockDrinks);

  render(
    <Router>
      <App />
    </Router>
  );

  // Wait for data to load
  await waitFor(() => {
    // Check if snacks and drinks are rendered
    expect(screen.getByText("Snack 1")).toBeInTheDocument();
    expect(screen.getByText("Snack 2")).toBeInTheDocument();
    expect(screen.getByText("Drink 1")).toBeInTheDocument();
    expect(screen.getByText("Drink 2")).toBeInTheDocument();
  });
});

// Add more tests for routing, user interactions, etc.

// Add more tests for routing, user interactions, etc.
