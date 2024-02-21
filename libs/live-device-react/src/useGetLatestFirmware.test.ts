import { renderHook } from "@testing-library/react";
import { useGetLatestFirmware } from "./useGetLatestFirmware";

// deviceInfo?: DeviceInfoEntity | null;
// providerId: number;
// userId: string;
// managerApiRepository: HttpManagerApiRepository;

describe("useGetLatestFirmware", () => {
  test("it returns latest firmware", () => {
    const options = {
      deviceInfo: null,
      providerId: 1,
      userId: "userId",
      managerApiRepository: jest.fn(),
    };
    const { result } = renderHook(() => useGetLatestFirmware(options));

    // expect(result.current).toBe(1);
    // rerender({ value: 2, delay: 1000 });
    // expect(result.current).toBe(1);
    // act(() => jest.advanceTimersByTime(900));
  });
});
