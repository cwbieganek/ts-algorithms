import { describe, expect, it } from "vitest";
import binarySearch from "./binary_search";

describe("binarySearch", () => {
  it("returns null when given an empty array", () => {
    expect(binarySearch([], 42)).toBeNull();
  });

  it("returns null when given an array containing a single element that is not the needle", () => {
    let test = 1;
    expect(binarySearch([42], 43)).toBeNull();
  });

  it("can find the needle in an array containing a single element", () => {
    expect(binarySearch([42], 42)).toEqual(0);
  });

  it("can find the needle in an array containing two elements", () => {
    expect(binarySearch([42, 43], 43)).toEqual(1);
  });

  it("returns null when it cannot find the needle in an array containing two elements", () => {
    expect(binarySearch([1, 2], 44)).toBeNull();
  });

  it("can find the needle at the end of a three-element array", () => {
    expect(binarySearch([42, 43, 44], 44)).toEqual(2);
  });

  it("can find the needle at the beginning of a three-element array", () => {
    expect(binarySearch([42, 43, 44], 42)).toEqual(0);
  });

  it("can find the needle in a four-element array", () => {
    const testArray = [42, 43, 44, 45];
    expect(binarySearch(testArray, 42)).toEqual(0);
    expect(binarySearch(testArray, 43)).toEqual(1);
    expect(binarySearch(testArray, 44)).toEqual(2);
    expect(binarySearch(testArray, 45)).toEqual(3);
  });
});
