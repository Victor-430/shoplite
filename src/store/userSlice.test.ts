// 📝 ASSIGNMENT: Part 4. Replace each it.todo(...) with a real test
import { describe, it, expect } from "vitest";
import userReducer, { login, logout } from "./userSlice";

describe("userSlice", () => {
  it("starts logged out", () => {
    const state = userReducer(undefined, { type: "unknown" });
    expect(state.isLoggedIn).toBe(false);
    expect(state.name).toBe("");
  });

  it("logs the user in with their name", () => {
    const state = userReducer({ name: "", isLoggedIn: false }, login("Victor"));
    expect(state.isLoggedIn).toBe(true);
    expect(state.name).toBe("Victor");
  });

  it("logs the user out and clears the name", () => {
    const state = userReducer({ name: "Victor", isLoggedIn: true }, logout());
    expect(state.isLoggedIn).toBe(false);
    expect(state.name).toBe("");
  });
});
